import BasicObject from "../../domain/model/BasicObject";
import BasicObjectId from "../../domain/model/BasicObjectId";
import Point from "../../../common/model/Point";
import BasicObjectRepository from "../../domain/repository/BasicObjectRepository";

export default class CreateBasicObjectService {

    private basicObjectRepository: BasicObjectRepository;

    public createBasicObject(content: string, absolutePoint: Point): BasicObjectId {
        const newId: BasicObjectId = this.basicObjectRepository.nextBasicObjectId();
        this.basicObjectRepository.add(new BasicObject(newId, content, absolutePoint));
        return newId;
    }
    
}
