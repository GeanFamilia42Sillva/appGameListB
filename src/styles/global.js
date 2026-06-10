import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#1d3557',
  secondary: '#457b9d',
  background: '#f1faee',
  white: '#ffffff',
  danger: '#e63946',
  gray: '#777'
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20
  },

  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold'
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10
  }
});