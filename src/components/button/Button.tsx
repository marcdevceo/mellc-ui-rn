import React from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';
import { spinnerSize } from '../../theme';
import { BaseButtonProps } from './types-button';
import { getButtonStyle } from './buttonVariants';

const Button: React.FC<BaseButtonProps> = ({
  label,
  onPress,
  variant = 'primary',
  radius = 'sm',
  disabled = false,
  isLoading = false,
  loadingText = 'Loading...',
  style,
  textStyle,
}) => {
  const styles = getButtonStyle(variant, radius, disabled);

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, style]}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <>
          <ActivityIndicator
            color={styles.text.color}
            size={spinnerSize.sm}
            style={{ marginRight: 8 }}
          />
          <Text style={[styles.text, textStyle]}>{loadingText}</Text>
        </>
      ) : (
        <Text style={[styles.text, textStyle]}>{label}</Text>
      )}
    </Pressable>
  );
};

export default Button;
