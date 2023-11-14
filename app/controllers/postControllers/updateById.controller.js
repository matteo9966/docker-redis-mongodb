import { findPostById } from "../../db/post.model.js";
import { RequestHandler } from "express";
import { responseBodyFactory } from "../../utils/responseBodyFactory.js";
import * as gb from "../../jsdoc-models/requestBodies/getPost.request.js";
import { CustomServerError } from "../../errors/CustomServerErrror.js";