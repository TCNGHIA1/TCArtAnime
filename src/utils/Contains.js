import { StyleSheet } from "react-native";
import COLORS from "./colors.js";

export default Contains = StyleSheet.create({
  container: {
    flex: 1,
  },
  default: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.goldLeaf,
    fontWeight: "600",
    fontSize: 18,
  },
  headerTitle:{
    fontSize:24,
    fontWeight:500,
  },
  row: {
    flex: 1,
    width:'100%',
    alignItems: "center",
    justifyContent:'center',
    flexDirection: "row",
  },
  between:{
    justifyContent: "space-between",
  },
  end:{
    justifyContent: "flex-end",
  }
});
