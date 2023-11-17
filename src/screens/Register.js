import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {GlobalStyles} from "../constants/styles";

const schema = yup.object({
    nome: yup.string().required("Informe seu nome"),
    sobrenome: yup.string().required("Informe seu sobrenome"),
    email: yup.string().email("E-mail inválido!").required("Informe seu e-mail!"),
    senha: yup.string().min(8, "A senha deve conter no mínimo 8 caracteres").required("Informe sua senha"),
})



function Register({navigation}){

    const {control, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    }) //esta pode ser chamada quando o usuario clicar no botão de finalizar cadastro, utilizada para teste

    function handleRegister(data){
        console.log(data)
        // Verificar se não existe um usuário com o mesmo e-mail
        // Se não existir, cadastrar o usuário
        // Se existir, exibir um alerta
        // Mandar para a tela de objetivos
    }
    
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}/* BLOCO DE CAMPO */>
                <Text style={styles.title}>Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text>Nome</Text>
                <Controller
                    control={control}
                    name='nome'
                    render={({field:{onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.campo}
                            onChangeText={onChange}
                            onBlur={onBlur} //chamado quando o text input é tocado ein
                            value={value} 
                            placeholder='Seu nome.'
                        />
                    )}
                />
                {errors.nome && <Text style={styles.labelError}>{errors.nome?.message}</Text>}

                <Text>Sobrenome</Text>
                <Controller
                        control={control}
                        name='sobrenome'
                        render={({field:{onChange, onBlur, value}}) => (
                            <TextInput
                                style={styles.campo}
                                onChangeText={onChange}
                                onBlur={onBlur} //chamado quando o text input é tocado ein
                                value={value} 
                                placeholder='Seu sobrenome.'
                            />
                        )}
                    />
                {errors.sobrenome && <Text style={styles.labelError}>{errors.sobrenome?.message}</Text>}

                <Text>E-mail</Text>
                <Controller
                        control={control}
                        name='email'
                        render={({field:{onChange, onBlur, value}}) => (
                            <TextInput
                                style={styles.campo}
                                onChangeText={onChange}
                                onBlur={onBlur} //chamado quando o text input é tocado ein
                                value={value} 
                                placeholder='Digite seu e-mail.'
                            />
                        )}
                    />
                {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}


                <Text>Senha</Text>
                <Controller
                        control={control}
                        name='senha'
                        render={({field:{onChange, onBlur, value}}) => (
                            <TextInput
                                style={styles.campo}
                                onChangeText={onChange}
                                onBlur={onBlur} //chamado quando o text input é tocado ein
                                value={value}
                                secureTextEntry={true}
                                placeholder='Digite sua senha.'
                            />
                        )}
                    />
                {errors.senha && <Text style={styles.labelError}>{errors.senha?.message}</Text>}

               
                <Pressable style={styles.button} onPress={handleSubmit(handleRegister)}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </Pressable>

                <Pressable style={styles.buttonSignIn} onPress={() => navigation.replace('SignIn')}>
                    <Text style={styles.registerSignIn}>Entrar</Text>
                </Pressable>
                

            </Animatable.View>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: GlobalStyles.colors.background,
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    button:{
        backgroundColor: GlobalStyles.colors.primary,
        width: '40%',
        borderRadius: 100,
        paddingVertical: 8,
        marginTop: 19,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText:{
        fontWeight:'bold',
        fontSize: 18,
    },
    containerForm:{
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    campo:{
        padding:9,
        borderRadius: 20,
        backgroundColor: GlobalStyles.colors.input,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.primary

    },
    labelError:{
        alignSelf: 'flex-start',
        color: GlobalStyles.colors.error,
        marginBottom: 8
    },
    buttonSignIn: {
        backgroundColor: GlobalStyles.colors.input,
        width: '40%',
        borderRadius: 100,
        paddingVertical: 8,
        marginTop: 19,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    registerSignIn: {
        color: GlobalStyles.colors.text100,
        fontWeight: "bold",
        fontSize: 16
    }
})
    
