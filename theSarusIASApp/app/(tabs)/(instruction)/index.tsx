import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Button } from "../../../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/Card";
// import ExamHeader from "@/components/ExamHeader";

export default function InstructionsPage() {
  return (
    <ScrollView className="flex-1 bg-background p-6 mt-14 mb-16">
      {/* <ExamHeader /> */}
      <View className="max-w-4xl mx-auto">
        {/* Header */}
        <View className="items-center mb-8">
          <Text className="text-2xl font-serif font-bold text-primary mb-2">
            Staff Selection Commission
          </Text>
          <Text className="text-xl font-semibold text-foreground mb-1">
            Combined Graduate Level Examination (Tier-I)
          </Text>
          <Text className="text-muted-foreground">Computer Based Examination</Text>
        </View>

        {/* General Instructions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl text-primary">General Instructions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <View>
              <Text className="font-semibold mb-2">1. Examination Details:</Text>
              <View className="ml-4 space-y-1">
                <Text className="text-sm">• Total Questions: 100 (25 from each section)</Text>
                <Text className="text-sm">• Total Time: 60 minutes</Text>
                <Text className="text-sm">• Maximum Marks: 200 (2 marks each)</Text>
                <Text className="text-sm">• Negative Marking: 0.50 marks per wrong answer</Text>
              </View>
            </View>

            <View>
              <Text className="font-semibold mb-2">2. Sections:</Text>
              <View className="ml-4 space-y-1">
                <Text className="text-sm">• General Intelligence & Reasoning (Q1–25)</Text>
                <Text className="text-sm">• General Awareness (Q26–50)</Text>
                <Text className="text-sm">• Quantitative Aptitude (Q51–75)</Text>
                <Text className="text-sm">• English Comprehension (Q76–100)</Text>
              </View>
            </View>

            <View>
              <Text className="font-semibold mb-2">3. Navigation Instructions:</Text>
              <View className="ml-4 space-y-1">
                <Text className="text-sm">• Use "Next" and "Previous" buttons to move between questions</Text>
                <Text className="text-sm">• Tap question numbers in sidebar to jump directly</Text>
                <Text className="text-sm">• Use "Flag for Review" to mark questions</Text>
                <Text className="text-sm">• Use "Clear Response" to remove selected answer</Text>
                <Text className="text-sm">
                  • Color Codes: Green (Answered), Orange (Flagged), Red (Current), Gray (Not Visited)
                </Text>
              </View>
            </View>

            <View>
              <Text className="font-semibold mb-2">4. Important Guidelines:</Text>
              <View className="ml-4 space-y-1">
                <Text className="text-sm">• Read each question carefully</Text>
                <Text className="text-sm">• Only one option can be selected</Text>
                <Text className="text-sm">• Answers can be changed before submission</Text>
                <Text className="text-sm">• Timer auto-submits when time expires</Text>
                <Text className="text-sm">• Ensure stable internet connection</Text>
              </View>
            </View>

            <View>
              <Text className="font-semibold mb-2">5. Final Submission:</Text>
              <View className="ml-4 space-y-1">
                <Text className="text-sm">• Click "Submit Exam" to submit responses</Text>
                <Text className="text-sm">• Review answers before submitting</Text>
                <Text className="text-sm">• Once submitted, changes not allowed</Text>
                <Text className="text-sm">• Auto-submission on timeout</Text>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Technical Requirements */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Technical Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <View className="ml-4 space-y-1">
              <Text className="text-sm">• Supported browsers: Chrome, Firefox, Safari, Edge</Text>
              <Text className="text-sm">• Stable internet connection required</Text>
              <Text className="text-sm">• JavaScript must be enabled</Text>
              <Text className="text-sm">• Screen resolution: Minimum 1024x768</Text>
              <Text className="text-sm">• Disable pop-up blockers</Text>
            </View>
          </CardContent>
        </Card>

        {/* Actions */}
        <View className="flex-row justify-center gap-4 pb-10">
          <Button variant="outline" label="Read Terms & Conditions" />
          <Button label="Start Examination" />
        </View>
      </View>
    </ScrollView>
  );
}
