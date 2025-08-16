import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Link } from "expo-router";
import { Button } from "../../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";

export default function TermsPage() {
  return (
    <ScrollView className="flex-1 bg-background p-6">
      <View className="max-w-4xl mx-auto">
        {/* Header */}
        <View className="items-center mb-8">
          <Text className="text-3xl font-serif font-bold text-primary mb-2">
            Staff Selection Commission
          </Text>
          <Text className="text-xl font-semibold text-foreground mb-1">
            Terms & Conditions
          </Text>
          <Text className="text-muted-foreground">
            Computer Based Examination
          </Text>
        </View>

        {/* Candidate Responsibilities */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl text-primary">
              Candidate Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <View>
              <Text className="font-semibold mb-2">
                1. Eligibility & Registration:
              </Text>
              <View className="ml-4 space-y-1">
                <Text className="text-sm">• Ensure eligibility before appearing</Text>
                <Text className="text-sm">• Provide accurate and verifiable info</Text>
                <Text className="text-sm">• False info may lead to disqualification</Text>
                <Text className="text-sm">• Keep login credentials secure</Text>
              </View>
            </View>

            <View>
              <Text className="font-semibold mb-2">2. Examination Conduct:</Text>
              <View className="ml-4 space-y-1">
                <Text className="text-sm">• Maintain discipline, follow guidelines</Text>
                <Text className="text-sm">• No cheating or unfair means</Text>
                <Text className="text-sm">• No phones, calculators, or devices</Text>
                <Text className="text-sm">• Do not communicate during exam</Text>
                <Text className="text-sm">• Screenshots/recording prohibited</Text>
              </View>
            </View>

            <View>
              <Text className="font-semibold mb-2">3. Technical Issues:</Text>
              <View className="ml-4 space-y-1">
                <Text className="text-sm">• Ensure stable internet connectivity</Text>
                <Text className="text-sm">• Verify system compatibility</Text>
                <Text className="text-sm">• Contact helpdesk if issues</Text>
                <Text className="text-sm">• Lost time may not be compensated</Text>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Examination Rules */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Examination Rules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <View>
              <Text className="font-semibold mb-2">4. Time Management:</Text>
              <View className="ml-4 space-y-1">
                <Text className="text-sm">• Exam duration is fixed</Text>
                <Text className="text-sm">• Manage time effectively</Text>
                <Text className="text-sm">• System auto-submits on timeout</Text>
                <Text className="text-sm">• No extra time for submission</Text>
              </View>
            </View>

            <View>
              <Text className="font-semibold mb-2">5. Answer Submission:</Text>
              <View className="ml-4 space-y-1">
                <Text className="text-sm">• Only submitted answers count</Text>
                <Text className="text-sm">• Review before final submit</Text>
                <Text className="text-sm">• No changes after submission</Text>
                <Text className="text-sm">• Early exit = partial submission</Text>
              </View>
            </View>

            <View>
              <Text className="font-semibold mb-2">6. Results & Evaluation:</Text>
              <View className="ml-4 space-y-1">
                <Text className="text-sm">• Results as per official schedule</Text>
                <Text className="text-sm">• SSC decision is final</Text>
                <Text className="text-sm">• No correspondence on results</Text>
                <Text className="text-sm">• Check results on SSC website</Text>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Legal Disclaimer */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Legal Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Text className="text-sm">
              <Text className="font-bold">Privacy Policy: </Text>
              Personal info used only for exams, not shared with unauthorized parties.
            </Text>
            <Text className="text-sm">
              <Text className="font-bold">Liability: </Text>
              SSC not responsible for technical issues or connectivity failures.
            </Text>
            <Text className="text-sm">
              <Text className="font-bold">Intellectual Property: </Text>
              Exam content is SSC property. Unauthorized use is prohibited.
            </Text>
            <Text className="text-sm">
              <Text className="font-bold">Governing Law: </Text>
              Subject to Indian law and jurisdiction.
            </Text>
          </CardContent>
        </Card>

        {/* Declaration */}
        <View className="bg-muted p-4 rounded-lg mb-6">
          <Text className="text-sm text-center">
            <Text className="font-bold">Declaration: </Text>
            By proceeding, I confirm I have read and agree to abide by all terms.
          </Text>
        </View>

        {/* Actions */}
        <View className="flex-row justify-center gap-4">
          <Button variant="outline" label="Back to Instructions" />
          <Button label="I Agree - Start Examination" />
        </View>
      </View>
    </ScrollView>
  );
}
