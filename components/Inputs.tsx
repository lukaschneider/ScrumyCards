import { Field, useField, FieldAttributes } from "formik";

import { BsCaretDownFill } from "react-icons/bs";

import styled, { css } from "styled-components";

import {
  borderWidth,
  borderRadius,
  elementSizeL,
  fontSizeM,
  spacingL,
  spacingM,
  elementSizeS,
} from "./Layouts";

const fieldStyles = css`
  height: ${elementSizeL}px;
  width: fill-available;

  outline: none;
  appearance: none;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.background1};
  border: ${borderWidth}px solid transparent;
  border-radius: ${borderRadius}px;

  transition: border 0.1s ease-in-out;
  :focus-within {
    border: ${borderWidth}px solid ${({ theme }) => theme.inputPlaceholderColor};
  }

  :hover {
    border: ${borderWidth}px solid ${({ theme }) => theme.inputPlaceholderColor};
  }

  ::placeholder {
    color: ${({ theme }) => theme.inputPlaceholderColor};
    opacity: 1;
  }

  margin: 0;
`;

export const TextField = styled(Field)`
  ${fieldStyles}

  color: ${({ theme }) => theme.inputTextColor};
  font-size: ${fontSizeM}px;
  font-weight: normal;

  padding: 0 ${spacingM}px;
`;

interface SelectionField extends FieldAttributes<any> {
  options: string[];
}

const SelectionFieldContainter = styled.div`
  ${fieldStyles}

  display: flex;
  align-items: center;
`;

const SelectionFieldInput = styled.input`
  z-index: 10;

  ${fieldStyles}
  border: 0px !important;
  box-shadow: none !important;
  background: transparent !important;

  color: ${({ theme }) => theme.inputTextColor};
  font-size: ${fontSizeM}px;
  font-weight: normal;

  padding: 0 ${spacingM}px;
  margin-right: -${spacingM + elementSizeS}px;
`;

const DropdownIconContainter = styled.div`
  display: flex;
`;

const DropdownIcon = styled(BsCaretDownFill)`
  fill: ${({ theme }) => theme.controll};
  width: ${elementSizeS}px;
  margin-right: ${spacingM}px;
`;

export const SelectionField = ({ options, ...fieldProps }: SelectionField) => {
  const [fieldConfig] = useField(fieldProps as any);

  return (
    <SelectionFieldContainter>
      <SelectionFieldInput as="select" {...fieldProps} {...fieldConfig}>
        {options.map((option, index) => (
          <option key={option + index}>{option}</option>
        ))}
      </SelectionFieldInput>
      <DropdownIconContainter>
        <DropdownIcon />
      </DropdownIconContainter>
    </SelectionFieldContainter>
  );
};

export const Button = styled.button`
  ${fieldStyles}

  width: auto;

  color: ${({ theme }) => theme.title};
  font-size: ${fontSizeM}px;
  font-weight: bold;

  cursor: pointer;

  :disabled {
    color: ${({ theme }) => theme.inputPlaceholderColor};
  }

  padding: 0 ${spacingM}px;
  margin: ${spacingL}px 0;
`;

export const BlankButton = styled.button`
  width: auto;

  background-color: transparent;
  border: none;
  outline: none;
  appearance: none;

  cursor: pointer;

  padding: 0;
  margin: 0;
`;
