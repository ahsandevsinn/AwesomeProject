
import { View, Text } from "react-native"

const UserData = () => {
    return (
      <View>
        <Text style={{ fontSize: 40 }}> Ahsan</Text>
        <Text style={{ fontSize: 40 }}> 19</Text>
  
        <Text style={{ fontSize: 40 }}> ahsan@gmail.com</Text>
  
        <Text style={{ fontSize: 40 }}> Share</Text>
        <PersonalData />
        <Text style={{ fontSize: 40 }}> Share</Text>
  
      </View>
    )
  }
  
  
  const PersonalData = () => {
    return (
      <View>
        <Text style={{ fontSize: 40 }}> Role : Flutter Developer</Text>
        <Text style={{ fontSize: 40 }}> Role : Company Name : Techorpic</Text>
  
      </View>
    )
  }

  export {UserData , PersonalData}