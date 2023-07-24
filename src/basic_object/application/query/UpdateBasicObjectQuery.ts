import { injectable, inject } from "inversify";
import { REPOSITORY } from "../../../config/contant/repository";
import "reflect-metadata"

import Point from "../../../common/model/Point";
import BasicObjectId from "../../domain/model/BasicObjectId";
import BasicObjectRepository from "../../domain/repository/BasicObjectRepository";

@injectable()
export default class UpdateBasicObjectQuery {

    private _basicObjectRepository: BasicObjectRepository;

    constructor(
        @inject(REPOSITORY.BasicObjectService) basicObjectRepository: BasicObjectRepository
    ) {
        this._basicObjectRepository = basicObjectRepository;
    }

    public updateContentById(id: BasicObjectId, newContent: string): void {
        return this._basicObjectRepository.updateContentById(id, newContent);
    }

    public updateAbsolutePointById(id: BasicObjectId, newAbsolutePoint: Point): void {
        return this._basicObjectRepository.updateAbsolutePointById(id, newAbsolutePoint);
    }

}
