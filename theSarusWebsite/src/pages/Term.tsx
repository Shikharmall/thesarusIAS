import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
// import Link from "next/link"

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-serif font-bold text-primary mb-2">Staff Selection Commission</h1>
                    <h2 className="text-xl font-semibold text-foreground mb-1">Terms & Conditions</h2>
                    <p className="text-muted-foreground">Computer Based Examination</p>
                </div>

                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle className="text-xl text-primary">Candidate Responsibilities</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="font-semibold mb-2">1. Eligibility & Registration:</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                                <li>Candidates must ensure they meet all eligibility criteria before appearing for the examination</li>
                                <li>All information provided during registration must be accurate and verifiable</li>
                                <li>False information may lead to disqualification at any stage of the selection process</li>
                                <li>Candidates are responsible for keeping their login credentials secure</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">2. Examination Conduct:</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                                <li>Candidates must maintain discipline and follow all examination guidelines</li>
                                <li>Any form of malpractice, cheating, or unfair means is strictly prohibited</li>
                                <li>Use of mobile phones, calculators, or any electronic devices is not allowed</li>
                                <li>Candidates should not communicate with others during the examination</li>
                                <li>Taking screenshots or recording the examination content is prohibited</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">3. Technical Issues:</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                                <li>Candidates are responsible for ensuring stable internet connectivity</li>
                                <li>System compatibility should be verified before starting the examination</li>
                                <li>In case of technical difficulties, immediately contact the helpdesk</li>
                                <li>Time lost due to technical issues may not be compensated</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle className="text-xl text-primary">Examination Rules</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="font-semibold mb-2">4. Time Management:</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                                <li>The examination duration is fixed and cannot be extended under normal circumstances</li>
                                <li>Candidates should manage their time effectively across all sections</li>
                                <li>The system will automatically submit responses when time expires</li>
                                <li>No additional time will be provided for submission</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">5. Answer Submission:</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                                <li>Only submitted answers will be considered for evaluation</li>
                                <li>Candidates must review their responses before final submission</li>
                                <li>Once submitted, no changes can be made to the responses</li>
                                <li>Partial submissions due to early exit will be considered final</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">6. Results & Evaluation:</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                                <li>Results will be declared as per the official schedule</li>
                                <li>The decision of SSC regarding evaluation and results is final</li>
                                <li>No correspondence will be entertained regarding answer keys or results</li>
                                <li>Candidates can check their results on the official SSC website</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle className="text-xl text-primary">Legal Disclaimer</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3 text-sm">
                            <p>
                                <strong>Privacy Policy:</strong> All personal information provided by candidates will be used solely for
                                examination and selection purposes. SSC is committed to protecting candidate privacy and will not share
                                personal data with unauthorized parties.
                            </p>
                            <p>
                                <strong>Liability:</strong> SSC will not be held responsible for any technical issues, internet
                                connectivity problems, or system failures that may affect the examination. Candidates participate at
                                their own risk.
                            </p>
                            <p>
                                <strong>Intellectual Property:</strong> All examination content, including questions, answers, and
                                materials, are the intellectual property of SSC. Unauthorized reproduction or distribution is strictly
                                prohibited and may result in legal action.
                            </p>
                            <p>
                                <strong>Governing Law:</strong> These terms and conditions are governed by the laws of India. Any
                                disputes arising from the examination process will be subject to the jurisdiction of Indian courts.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <div className="bg-muted p-4 rounded-lg mb-6">
                    <p className="text-sm text-center">
                        <strong>Declaration:</strong> By proceeding with the examination, I acknowledge that I have read,
                        understood, and agree to abide by all the terms and conditions mentioned above. I understand that violation
                        of any rule may result in disqualification.
                    </p>
                </div>

                <div className="flex gap-4 justify-center">
                    <Link to="/">
                        <Button variant="outline">Back to Instructions</Button>
                    </Link>
                    {/* <Link to="/exam">
                        <Button>I Agree - Start Examination</Button>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}
