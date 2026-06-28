import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Onboarding
      </Link>
      <Link href="/(z-auth)/sign-in">Sign In</Link>
      <Link href="/(z-auth)/sign-up">Sign Up</Link>
      <Link href="/subscriptions/spotify">Spotify Subscriptions</Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Spotify Subscriptions
      </Link>
    </SafeAreaView>
  );
}
