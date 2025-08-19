import React from "react";
import { components } from "react-select";
import { Tooltip } from "react-tooltip";

// props.data = objeto da origem (com { label, description, itens, beneficios })
export const OptionOriginTooltip = (props) => {
  const { data } = props;

  return (
    <components.Option {...props}>
      <div>
        <div className="d-flex justify-content-between">
          <span>{data.label}</span>
          <span data-tooltip-id={`tooltip-${data.value}`}>
            <i className="fa-solid fa-circle-info"></i>
          </span>
        </div>

        <Tooltip id={`tooltip-${data.value}`} 
          className="position-fixed w-50 color-black">
          <div className="text-sm">
            <p><strong>Descrição:</strong> {data.description}</p>
            <p><strong>Itens:</strong> {data.itens}</p>
            <p><strong>Benefícios:</strong> {data.beneficios}</p>
          </div>
        </Tooltip>
      </div>
    </components.Option>
  );
};

export default OptionOriginTooltip;
