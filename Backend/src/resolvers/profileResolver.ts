import bcrypt from "bcryptjs";
import profileService from "../services/profileServices";

const ProfileResolver = {
    Query: {
        /**
         * Fetches a profile by ProfileID.
         * @param ProfileID - The unique ID of the profile.
         * @returns The profile object or null if not found.
         */
        async getProfile(_: any, { ProfileID }: { ProfileID: number }) {
            return await profileService.getProfileById(ProfileID);
        },

        /**
         * Authenticates a user using email and password.
         * @param Email - The user's email.
         * @param Password - The user's password.
         * @returns The profile if authentication is successful, otherwise throws an error.
         */
        async login(_: any, { Email, Password }: { Email: string; Password: string }) {
            const user = await profileService.getProfileByEmail(Email);
            if (!user) throw new Error("User not found");

            const isMatch = await bcrypt.compare(Password, user.Password);
            if (!isMatch) throw new Error("Invalid credentials");

            return user; // JWT can be added later
        }
    },

    Mutation: {
        /**
         * Creates a new profile.
         * @param Name - The user's first name.
         * @param Surname - The user's last name.
         * @param DateOfBirth - The user's date of birth (optional).
         * @param Gender - The user's gender (optional).
         * @param Email - The user's email.
         * @param Password - The user's password.
         * @returns The newly created profile.
         */
        async createProfile(
            _: any,
            { Name, Surname, DateOfBirth, Gender, Email, Password }: 
            { Name: string; Surname: string; DateOfBirth?: Date; Gender?: string; Email: string; Password: string; }
        ) {
            const hashedPassword = await bcrypt.hash(Password, 10);
            return await profileService.createProfile({
                Name,
                Surname,
                DateOfBirth,
                Gender,
                Email,
                Password: hashedPassword
            });
        },

        /**
         * Updates an existing profile.
         * @param ProfileID - The ID of the profile to update.
         * @param data - Fields to update.
         * @returns The updated profile or null if not found.
         */
        async updateProfile(
            _: any,
            { ProfileID, data }: { ProfileID: number; data: Partial<{ Name: string; Surname: string; DateOfBirth?: Date; Gender?: string; Email: string; Password: string; }> }
        ) {
            if (data.Password) {
                data.Password = await bcrypt.hash(data.Password, 10);
            }
            return await profileService.updateProfile(ProfileID, data);
        },

        /**
         * Deletes a profile.
         * @param ProfileID - The ID of the profile to delete.
         * @returns True if deletion was successful, false otherwise.
         */
        async deleteProfile(_: any, { ProfileID }: { ProfileID: number }) {
            return await profileService.deleteProfile(ProfileID);
        }
    }
};

export default ProfileResolver;
