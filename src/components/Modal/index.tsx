import {
  ForwardRefRenderFunction,
  ReactNode,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';

export type TComportModal = {
  handlePresentModalPress: () => void;
  handleClose: () => void;
  handleDismiss: () => void;
};

type ModalT = {
  children: ReactNode;
  snapPoints?: string[];
};

const Modal: ForwardRefRenderFunction<TComportModal, ModalT> = (
  { children, snapPoints = ['24%', '60%'] },
  ref
) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRenderBackDrop = useCallback((props: any) => {
    return (
      <BottomSheetBackdrop
        appearsOnIndex={3}
        disappearsOnIndex={-1}
        {...props}
      />
    );
  }, []);

  const handleDismiss = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const handleClose = useCallback(() => {
    bottomSheetModalRef.current?.close;
  }, []);

  useImperativeHandle(ref, () => {
    return {
      handleClose,
      handleDismiss,
      handlePresentModalPress,
      handleRenderBackDrop,
    };
  });

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      backdropComponent={handleRenderBackDrop}
      snapPoints={snapPoints}
      enableDismissOnClose
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </BottomSheetModal>
  );
};

export default forwardRef(Modal);
