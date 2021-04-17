import {MikroORM} from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/post";
import microConfig from './mikro-orm.config';

const main = async () =>{
    const orm = await MikroORM.init(microConfig);
    const post = orm.em.create(Post, {title: 'my first post'});
    //inserting post request in our database
    await orm.em.persistAndFlush(post);

};


