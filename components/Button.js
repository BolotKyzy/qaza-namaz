import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Button(props) {
    return (
        <View style = {styles.button}>
            <TouchableOpacity>
                <View style={styles.submitBtn}>
                    <Text style={styles.submitText}>{props.text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    submitBtn: {
        backgroundColor: '#97D2FB',
        paddingVertical: 20,
        borderRadius: 10,
    },
    submitText: {
        fontSize: 20,
        color: '#3359b4',
        textAlign: 'center',
    },
    button: {
        bottom: 0,
        position: 'absolute',
        width: '100%',
        paddingBottom: 20
    }
});
