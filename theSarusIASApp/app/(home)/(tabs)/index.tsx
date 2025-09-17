import Header from "@/components/common/Header";
import Banner from "@/components/home/Banner";
import SlidableCards1 from "@/components/home/SlidableCards1";
import SlidableCards2 from "@/components/home/SlidableCards2";
import AlertCustomise from "@/components/ui/AlertCustomise";
import { AlertProps } from "@/utils/types/alert";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { BackHandler, ScrollView, StyleSheet, View } from "react-native";
import { Colors } from "../../../utils/constant/Colors";


export default function HomeScreen() {

  const [alertContent, setAlertContent] = useState<AlertProps>({
    visible: false,
    title: "",
    message: "",
    confirmLabel: "",
    cancelLabel: ""
  });

  const showAlert = (props: Partial<AlertProps>) => {
    setAlertContent({
      visible: true,
      title: props.title ?? "",
      message: props.message ?? "",
      confirmLabel: props.confirmLabel ?? "Ok",
      cancelLabel: props.cancelLabel ?? "",
      onConfirm: props.onConfirm,
      onCancel: props.onCancel,
    })
  }

  const backAction = () => {
    showAlert({
      title: "Exit",
      message: "Are you sure you want to exit app?",
      confirmLabel: "Yes",
      cancelLabel: "Cancel",
      onConfirm: () => BackHandler.exitApp(),
    })

    return true;
  };

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView style={{ marginVertical: 10 }}>
        <Banner />
        <SlidableCards1 />
        <SlidableCards2 title={'Courses'} />
        <SlidableCards2 title={'Test Series'} />
      </ScrollView>

      <AlertCustomise
        visible={alertContent?.visible}
        title={alertContent?.title}
        message={alertContent?.message}
        confirmLabel={alertContent?.confirmLabel}
        cancelLabel={alertContent?.cancelLabel}
        onConfirm={() => {
          if (alertContent.onConfirm) alertContent.onConfirm()
          setAlertContent((prev) => ({ ...prev, visible: false }))
        }}
        onCancel={() => {
          if (alertContent.onCancel) alertContent.onCancel()
          setAlertContent((prev) => ({ ...prev, visible: false }))
        }}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
})
