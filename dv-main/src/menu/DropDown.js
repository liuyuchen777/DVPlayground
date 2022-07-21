export const DropDown = ({ id, options, selectedValue, onSelectValueChange }) => (
  <select 
    id={id} 
    onChange={event => onSelectValueChange(event.target.value)}
  >
    {
      options.map(({ value, label }) => (
        <option value={value} selected={value === selectedValue}>{label}</option>
      ))
    }
  </select>
);
