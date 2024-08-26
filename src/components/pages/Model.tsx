import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";
import {pumaArr} from "./Puma";
import {AdidasItem} from "./Adidas";
import {PumaItem} from "./Puma";

type CrossModelsType = {
    [key: string]: (AdidasItem[] |PumaItem[])
}

const crossModels: CrossModelsType = {
    adidas: adidasArr,
    puma: pumaArr
};

export const Model = () => {

    const {model, id} = useParams();
    //todo: необходимо убрать хардкод
    const modelId = Number(id);
    // const currentModel =  adidasArr.find(el => el.id === modelId)
    const currentModel =  model
                                            ? crossModels[model].find(el => el.id === modelId)
                                            : null

    return (
        <div style={{textAlign: "center"}}>
            { currentModel ? (
                <>
                    <h2>{currentModel.model}</h2>
                    <h3>{currentModel.collection}</h3>
                    <h3>{currentModel.price}</h3>
                    <img
                        src={currentModel.picture}
                        alt={currentModel.model}
                        style={{width: "300px", height: 'auto'}}
                    />
                </>
            ) : (
                <h2>Модель отсутствует</h2>
             )
            }
        </div>
    )
}

// <h2>{adidasArr[Number(params.id)].model}</h2>
// <h3>{adidasArr[Number(params.id)].collection}</h3>
// <h3>{adidasArr[Number(params.id)].price}</h3>
// <img
//     src={adidasArr[Number(params.id)].picture}
//     alt={adidasArr[Number(params.id)].model}
//     style={{width: "300px", height: 'auto'}}
// />