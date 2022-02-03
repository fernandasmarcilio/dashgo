import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
  error?: FieldError;
}

// EXEMPLO DE ENCAMINHAMENTO DE REF

// componente precisa estar em arrow function
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>  = ({ name, label, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{ bg: "gray.900" }}
        size="lg"
        ref={ref}
        {...rest}
      />

      {!!error && (
        <FormErrorMessage>{error.message}</FormErrorMessage>
      )}

  </FormControl>
  )
}

// metodo do react para fazer o encaminhamento da ref
export const Input = forwardRef(InputBase)