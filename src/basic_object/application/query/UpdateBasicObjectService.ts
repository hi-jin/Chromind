import Point from "../../../common/model/Point";
import BasicObjectId from "../../domain/model/BasicObjectId";
import BasicObjectRepository from "../../domain/repository/BasicObjectRepository";

export default class UpdateBasicObjectService {

    private basicObjectRepository: BasicObjectRepository;

    public updateContentById(id: BasicObjectId, newContent: string): void {
        return this.basicObjectRepository.updateContentById(id, newContent);
    }

    public updateAbsolutePointById(id: BasicObjectId, newAbsolutePoint: Point): void {
        return this.basicObjectRepository.updateAbsolutePointById(id, newAbsolutePoint);
    }

}
