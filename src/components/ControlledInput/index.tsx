import React, { useCallback, useState } from 'react';
import { Controller, Control } from 'react-hook-form';
import { TextInput, TextInputProps, StyleSheet, Text } from 'react-native';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label: string;
  error?: string | null | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onValueChanged?: (val: any) => void;
} & TextInputProps;

export function ControlledInput({
  onValueChanged,
  control,
  name,
  error,
  label,
  ...props
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused((prev) => !prev);
  }, []);
  const focus = isFocused ? styles.focus : null;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
          <Text>{label}</Text>
          <TextInput
            style={[styles.input, focus]}
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChangeText={(val) => {
              onChange(val);
              if (onValueChanged) {
                onValueChanged(val);
              }
            }}
            value={value}
            {...props}
          />
          {error && <Text style={{ color: 'red' }}>*{error}</Text>}
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  focus: {
    borderColor: '#2563eb',
  },
  input: {
    backgroundColor: 'rgba(236, 236, 236, 0.37)',
    borderColor: 'rgba(117, 117, 117, 0.411)',
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 14,
    lineHeight: 20,
    padding: 10,
  },
});
