import { inject, injectable } from "inversify";
import { REPOSITORY } from "../../../config/constant/repository";
import "reflect-metadata";

import BasicObject from "../../domain/model/BasicObject";
import BasicObjectId from "../../domain/model/BasicObjectId";
import Point from "../../../common/model/Point";
import BasicObjectRepository from "../../domain/repository/BasicObjectRepository";

@injectable()
export default class CreateBasicObjectQuery {

    private _basicObjectRepository: BasicObjectRepository;

    constructor(
        @inject(REPOSITORY.BasicObjectService) basicObjectRepository: BasicObjectRepository
    ) {
        this._basicObjectRepository = basicObjectRepository;
    }

    public createBasicObject(content: string, absolutePoint: Point): BasicObjectId {
        const newId: BasicObjectId = this._basicObjectRepository.nextBasicObjectId();
        this._basicObjectRepository.add(new BasicObject(newId, content, absolutePoint));
        return newId;
    }
    
}
