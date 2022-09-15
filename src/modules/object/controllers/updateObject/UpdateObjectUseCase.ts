import logger from "../../../../utils/logger"
import { ObjectTest } from "../../../../schemas/ObjectTest";

interface IRequest {
    name: string; 
    array: []; 
    object: {
        objName: string;
        objValue: number;
    }; 
    number: number;
}

class UpdateObjectUseCase {
    async execute({
        name, 
        array, 
        object, 
        number
    }: IRequest) {
        try {
            const user = await ObjectTest.updateOne({
                name, 
                array, 
                object, 
                number
            });
    
            return user;
        } catch (error) {
            logger.error(error)
        }
    }
}

export { UpdateObjectUseCase };