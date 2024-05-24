import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import upArrowIcon from "assests/icons/upArrowIcon.svg";
import downArrowIcon from "assests/icons/downArrowIcon.svg";

export interface DropdownOption {
  value: string | number;
  label: string;
}

interface Props {
  name: string;
  options?: DropdownOption[];
  required?: boolean;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (field: string, option: DropdownOption) => void;
}

export const AutoComplete: React.FC<Props> = (props) => {
  const { name, options = [], label, disabled, onChange } = props;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );
  const [filteredOptions, setFilteredOptions] = useState<DropdownOption[] | []>(
    options
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: DropdownOption) => {
    onChange?.(name, option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSelectedOption(null);
      const filteredOptions = options.filter(
        (option) =>
          value && option.label.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filteredOptions);
    },
    [options]
  );

  return (
    <div ref={dropdownRef} className={`relative ${isOpen ? "z-20" : ""}`}>
      <div className="">
        <input
          type="text"
          className={`text-sm bg-white border border-[#CBCBCB] focus:outline-primary rounded-md px-4 py-2 pr-7 text-gray-700 relative w-full h-9 text-left`}
          name={name}
          onClick={toggleDropdown}
          placeholder={label}
          disabled={disabled}
          value={selectedOption?.label}
          onChange={handleChange}
        />
      </div>
      <img
        src={isOpen ? upArrowIcon : downArrowIcon}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 h-3 w-3"
        alt="searchIcon"
      />
      <div
        className={`absolute max-h-52 w-64 overflow-y-auto overflow-x-hidden py-1 bg-white rounded-md shadow-lg ${
          isOpen ? "block" : "hidden"
        } `}
      >
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option, index) => (
            <div
              key={index}
              className="text-base block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white cursor-pointer "
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))
        ) : (
          <div className="text-base block px-4 py-2 text-gray-800 hover:bg-blue-200">
            No options
          </div>
        )}
      </div>
    </div>
  );
};
