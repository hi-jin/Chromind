import { inject, injectable } from "inversify";
import { REPOSITORY } from "../../../config/constant/repository";
import "reflect-metadata";

import BasicObject from "../../domain/model/BasicObject";
import BasicObjectId from "../../domain/model/BasicObjectId";
import BasicObjectRepository from "../../domain/repository/BasicObjectRepository";

@injectable()
export default class GetBasicObjectQuery {

    private _basicObjectRepository: BasicObjectRepository;

    constructor(
        @inject(REPOSITORY.BasicObjectService) basicObjectRepository: BasicObjectRepository
    ) {
        this._basicObjectRepository = basicObjectRepository;
    }

    public getAllBasicObjects(): Array<BasicObject> {
        return this._basicObjectRepository.findAll();
    }

    public getBaiscObjectById(id: BasicObjectId): BasicObject {
        return this._basicObjectRepository.findById(id);
    }
    
}
