import { useCallback, useRef, useState } from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

type TSearchBar = {
  placeholder: string;
  setValue: ([key]: string) => void;
} & TouchableOpacityProps;

export default function SearchBar({
  placeholder,
  setValue,
  ...props
}: TSearchBar) {
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleIsFocus = useCallback(() => {
    return setIsFocused(!isFocused);
  }, [isFocused]);

  const handleFocus = useCallback(() => {
    inputRef.current?.focus();
    return;
  }, []);

  const styleFocus = isFocused
    ? [styles.wrapper, styles.focus]
    : styles.wrapper;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handleFocus}
      style={styleFocus}
      {...props}
    >
      <FontAwesome5
        name="search"
        size={18}
        color={isFocused ? '#2563eb' : 'grey'}
      />
      <TextInput
        onBlur={handleIsFocus}
        onFocus={handleIsFocus}
        ref={inputRef}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={setValue}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  focus: {
    borderColor: '#2563eb',
    borderWidth: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderColor: 'transparent',
    borderRadius: 50,
    borderWidth: 2,
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
});
