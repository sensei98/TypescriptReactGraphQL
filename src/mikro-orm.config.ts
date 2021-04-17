import { __prod__ } from "./constants";
import { Post } from "./entities/post";

export default {
    entities: [Post],
    dbName : 'lireddit',
    type: 'postgresql',
    debug: !__prod__
} as const
// another wway of doing it


// abother typescript prob
// const bob = {
//     entities: [Post],
//     dbName : 'lireddit',
//     type: 'postgresql',
//     debug: !__prod__,
// } as const;

// bob.type

