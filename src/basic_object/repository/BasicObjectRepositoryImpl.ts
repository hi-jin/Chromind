import { injectable } from "inversify";
import "reflect-metadata"

import Point from "../../common/model/Point";
import BasicObject from "../domain/model/BasicObject";
import BasicObjectId from "../domain/model/BasicObjectId";
import BasicObjectRepository from "../domain/repository/BasicObjectRepository";

@injectable()
export default class BasicObjectRepositoryImpl implements BasicObjectRepository {
    public findById(id: BasicObjectId): BasicObject {

    }

    public findAll(): Array<BasicObject> {

    }

    public add(object: BasicObject): void {

    }

    public updateContentById(id: BasicObjectId, newContent: string): void {

    }

    public updateAbsolutePointById(id: BasicObjectId, newAbsolutePoint: Point): void {
        
    }

    public nextBasicObjectId(): BasicObjectId {

    }
}
