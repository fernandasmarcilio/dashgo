import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
}

// EXEMPLO DE ENCAMINHAMENTO DE REF

// componente precisa estar em arrow function
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>  = ({ name, label, ...rest }, ref) => {
  return (
    <FormControl>
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
  </FormControl>
  )
}

// metodo do react para fazer o encaminhamento da ref
export const Input = forwardRef(InputBase)