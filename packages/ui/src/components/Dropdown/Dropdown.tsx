'use client';

import { Icon } from '@repo/icons';
import { nanoid } from 'nanoid';
import {
  KeyboardEvent,
  type MouseEvent,
  PropsWithChildren,
  useMemo,
  useRef,
  useState,
} from 'react';

import MenuContext from '../Menu/Menu.context';

import useOnClickOutside from '../../hooks/useClickOutside';

import { Menu } from '../Menu';
import { TextInput, type TextInputProps } from '../TextInput';

export interface DropdownProps extends PropsWithChildren, TextInputProps {}

const Dropdown = ({ children, onBlur, onFocus, ...props }: DropdownProps) => {
  const menuRef = useRef(null);
  const textFieldInputRef = useRef(null);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [value, setValue] = useState<string>();

  const textFieldInputRect = useMemo(() => {
    if (textFieldInputRef.current) {
      return (textFieldInputRef.current as any).getBoundingClientRect();
    }

    return {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0,
    };
  }, [textFieldInputRef.current]);

  const handleInputClick = (e: MouseEvent<HTMLInputElement>) => {
    setIsShowMenu(true);
  };

  const handleClickOutside = () => {
    setIsShowMenu(false);
  };

  const handleMenuSelect = (value: string) => {
    setIsShowMenu(false);
    setValue(value);
  };

  const handleKeypress = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  useOnClickOutside(menuRef, handleClickOutside);

  return (
    <MenuContext.Provider
      value={{
        onClick: handleMenuSelect,
      }}
    >
      <div className="care-dropdown">
        <TextInput
          autoComplete="off"
          isShowLabel={isShowMenu}
          ref={textFieldInputRef}
          value={value}
          trailingIcon={
            <Icon name={isShowMenu ? 'ArrowDropUp' : 'ArrowDropDown'} />
          }
          onClick={handleInputClick}
          onKeyDown={handleKeypress}
          onKeyUp={handleKeypress}
          {...props}
        />
        {isShowMenu && (
          <Menu
            ref={menuRef}
            id={nanoid(10)}
            style={{
              top: `${textFieldInputRect.bottom}px`,
              left: `${textFieldInputRect.left}px`,
              width: `${textFieldInputRect.width}px`,
            }}
          >
            {children}
          </Menu>
        )}
      </div>
    </MenuContext.Provider>
  );
};

export default Dropdown;
