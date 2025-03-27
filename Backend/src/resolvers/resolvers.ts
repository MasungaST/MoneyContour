import DateTime from "./dateTimeResolver";
import ProfileResolver from "./profileResolver";

const resolvers = {
    ...DateTime,
    ...ProfileResolver
}

export default resolvers;