import "./input.style.css";

export const InputText = ({ PHname, value, onChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder={PHname}
        className="input-field"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export const InputDate = ({ PHname, value, onChange }) => {
  return (
    <>
      <input
        type="date"
        placeholder={PHname}
        className="input-field"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export const InputNum = ({ PHname, value, onChange }) => {
  return (
    <>
      <input
        type="number"
        placeholder={PHname}
        className="input-field"
        value={value}
        onChange={onChange}
      />
    </>
  );
};
