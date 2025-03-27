import Profile from "../Models/profile.model";

/**
 * ==============================
 * Profile Service - Database Queries
 * ==============================
 * This file contains all database-related operations for the Profile entity.
 * It separates SQL logic from the resolvers, making the code cleaner and more maintainable.
 */

const profileService = {
    /** 
     * =========== 
     * CREATE 
     * =========== 
     */

    /**
     * Creates a new profile.
     * @param data - Object containing profile details.
     * @returns The newly created profile.
     */
    createProfile: async (data: {
        Name: string;
        Surname: string;
        DateOfBirth?: Date;
        Gender?: string;
        Email: string;
        Password: string;
    }) => {
        return await Profile.create(data);
    },

    /** 
     * =========== 
     * READ 
     * =========== 
     */

    /**
     * Retrieves a profile by its unique ProfileID.
     * @param ProfileID - The ID of the profile.
     * @returns The profile object or null if not found.
     */
    getProfileById: async (ProfileID: number) => {
        return await Profile.findByPk(ProfileID);
    },

    /**
     * Retrieves a profile by email.
     * @param Email - The email of the user.
     * @returns The profile object or null if not found.
     */
    getProfileByEmail: async (Email: string) => {
        return await Profile.findOne({ where: { Email } });
    },

    /**
     * Retreives an array of all the Profile entities in the database
     * @returns - Array of Profiles
     */
    getProfiles: async () => {
        /*return [
            { ProfileID: 1, Name: "John", Surname: "Doe", Email: "john@example.com", Password: "hashed", DateOfBirth: null, Gender: "Male", Image: null },
            { ProfileID: 2, Name: "Jane", Surname: "Doe", Email: "jane@example.com", Password: "hashed", DateOfBirth: null, Gender: "Female", Image: null },
          ]; */
 
        return await Profile.findAll();
    },

    /** 
     * =========== 
     * UPDATE 
     * =========== 
     */

    /**
     * Updates a profile's details.
     * @param ProfileID - The ID of the profile to update.
     * @param data - Object containing fields to update.
     * @returns The updated profile or null if not found.
     */
    updateProfile: async (ProfileID: number, data: Partial<{
        Name: string;
        Surname: string;
        DateOfBirth?: Date;
        Gender?: string;
        Email: string;
        Password: string;
    }>) => {
        const profile = await Profile.findByPk(ProfileID);
        if (!profile) return null;
        await profile.update(data);
        return profile;
    },

    /** 
     * =========== 
     * DELETE 
     * =========== 
     */

    /**
     * Deletes a profile by its ProfileID.
     * @param ProfileID - The ID of the profile to delete.
     * @returns True if deletion was successful, false otherwise.
     */
    deleteProfile: async (ProfileID: number) => {
        const deletedCount = await Profile.destroy({ where: { ProfileID } });
        return deletedCount > 0;
    }
};

export default profileService;
