import storage from '@react-native-firebase/storage';

  export async function uploadImage(uri, path) {
    try {
      
      const response = await fetch(uri);
   
      const blob = await response.blob();
      const ref = storage().ref(path);
      const task  = ref.put(blob);
      return new Promise((resolve, reject) => {
  task.on(
    'state_changed',
    (taskSnapshot ) => {
      console.log(`
        ${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`
      );
    },
    () => {
      reject(err);
    },
    async () => {
      const url = await task.snapshot.ref.getDownloadURL();
      resolve(url);
      return url;
    },
  );
});
} catch (err) {
console.log('uploadImage error: ' + err);
  }
}
  