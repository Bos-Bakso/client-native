import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default _getLocationAsync = async () => {
    let status = await Permissions.askAsync(Permissions.LOCATION);
    if (status.status !== 'granted') {
        console.log('not authorize');
        return{ latitude: null, longitude: null}
    } else {
        let location_ = await Location.getCurrentPositionAsync({});
        let { coords } = location_
      return { latitude: coords.latitude, longitude: coords.longitude}
  }
}