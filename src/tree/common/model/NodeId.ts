import CommonObjectId from "../../../common/model/CommonObjectId";

export default class NodeId extends CommonObjectId {

    constructor(id: number) {
        super("Node" + id.toString())
    }
    
}
