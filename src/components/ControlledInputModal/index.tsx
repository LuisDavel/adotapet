import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { StyleSheet, TextInputProps } from 'react-native';

import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  style?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onValueChanged?: (val: any) => void;
} & TextInputProps;

export function ControlledInputModal({
  onValueChanged,
  control,
  name,
  style,
  ...props
}: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <BottomSheetTextInput
          style={[styles.input, style]}
          onChangeText={(val) => {
            onChange(val);
            if (onValueChanged) {
              onValueChanged(val);
            }
          }}
          value={value}
          {...props}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
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
