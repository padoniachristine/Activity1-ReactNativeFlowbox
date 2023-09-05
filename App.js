import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const PP = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/88056453_2798788316841757_885079295259574272_n.jpg?stp=dst-jpg_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeH_u6kK6qpdQrE_TlasJU-sma3FM-6qzhqZrcUz7qrOGuBWft0jWsUTKw0WpZTRxAMmkK7-GuL0aK-zXv2RkCqJ&_nc_ohc=-NOF2WjWT4EAX-wuHSt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTuMzN4F9yBVCHbGPn4BXwxNwqI_YWgEuvU6rYkP82y5Q&oe=651E873A',
        }}
        style={styles.pp}
      />
    </View>
  );
};
const Profile = () => {
  const fname = 'Christine';
  const lname = 'Padonia';
  return (
    <View>
      <Text style={styles.profile}>{fname} {lname}</Text>
    </View>
  );
};
const Course = (props) => {
  return (
    <View>
      <Text style={styles.course}>{props.like}</Text>
    </View>
  );
};
const Subject = (props) => {
  return (
    <View>
      <Text style={styles.sub}>{props.subcode}</Text>
    </View>
  );
};

const SubjectDesc = (props) => {
  return (
    <View>
      <Text style={styles.subdesc}>{props.subdesc}</Text>
    </View>
  );
};
const Units = (props) => {
  return (
    <View>
      <Text style={styles.units}>Units: {props.units}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <PP />
        <Profile />
        <Course like="BS INFORMATION TECHNOLOGY" />
      </View>

      <Text style={styles.subtitle}>My Subjects:</Text>

      <View style={styles.sublist}>
        <Subject subcode="ELEC 2" />
        <View>
          <SubjectDesc subdesc="Web Development/Web Enterprise" />
          <Units units="3" />
        </View>
      </View>
      <View style={styles.sublist}>
        <Subject subcode="ELEC 3" />
        <View>
          <SubjectDesc subdesc="Mobile Application" />
          <Units units="3" />
        </View>
      </View>
      <View style={styles.sublist}>
        <Subject subcode="IT 311" />
        <View>
          <SubjectDesc subdesc="Software Engineering" />
          <Units units="3" />
        </View>
      </View>
      <View style={styles.sublist}>
        <Subject subcode="IT 312" />
        <View>
          <SubjectDesc subdesc="Information and Assurance 2" />
          <Units units="3" />
        </View>
      </View>
      <View style={styles.sublist}>
        <Subject subcode="IT 313" />
        <View>
          <SubjectDesc subdesc="Quantitative Methods" />
          <Units units="3" />
        </View>
      </View>
      <Text style={styles.clickhere}>Click here to see more</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  head: {
    backgroundColor: 'lightpink', 
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 250,
    width: 380,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 60,
    marginBottom: 10,
  },
  pp: {
    marginLeft: 20,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  profile: {
    color: 'black', 
    fontSize: 30,
    marginLeft: 20,
  },
  course: {
    color: 'white',
    fontSize:12, 
    marginLeft: 20,
  },
  subtitle: {
    marginRight: 248,
    fontSize: 20,
    marginBottom: 5,
  },
  sublist: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 380,
    backgroundColor: 'lightpink',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: 10,
    marginTop: 10,
  },
  sub: {
    fontSize: 18,
    padding: 5,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'white'
  },
  subdesc: {
    marginLeft: 30,
  },
  units: {
    marginLeft: 30,
  },
  clickhere: {
    marginTop: 15,
    marginLeft: 180,
    fontSize: 16,
    marginBottom: 40,
    color: '#24469C',
  },
});
