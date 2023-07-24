import BasicObject from "../../domain/model/BasicObject";
import BasicObjectId from "../../domain/model/BasicObjectId";
import BasicObjectRepository from "../../domain/repository/BasicObjectRepository";

export default class GetBasicObjectService {

    private basicObjectRepository: BasicObjectRepository;

    public getAllBasicObjects(): Array<BasicObject> {
        return this.basicObjectRepository.findAll();
    }

    public getBaiscObjectById(id: BasicObjectId): BasicObject {
        return this.basicObjectRepository.findById(id);
    }
    
}
