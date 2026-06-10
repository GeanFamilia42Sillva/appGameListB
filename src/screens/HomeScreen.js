import { globalStyles, colors } from "../styles/global"
import { initialGames } from "../data/InitialGames"
import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { FlatList } from "react-native-gesture-handler"

export default function HomeScreen() {
    const [games, setGames ] = useState(initialGames)

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>
                Meus Jogos
            </Text>
            <TouchableOpacity style={StyleSheet.buttonModal} onPress={() => 'oi'}>
                <Text style={StyleSheet.newGameText}>
                    Novo Jogo
                </Text>

            </TouchableOpacity>
            <FlatList
                data={games}
                keyExtractor={(item) => item.id}
                renderItem={({item}) =>(
                    <Text>{item.name}</Text>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    buttonModal: {
        backgroundColor: colors.primary,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20
    },
    newGameText: {
        color: colors.white,
        fontWeight: 'bold'
    }
})
