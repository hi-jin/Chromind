import CommonObjectId from "../../../common/model/CommonObjectId";

export default class TreeId extends CommonObjectId {

    constructor(id: number) {
        super("Node" + id.toString())
    }
    
}