import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import Logo from "./Logo";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const NoAccessToCart = () => {
    return (
        <div className="flex items-center justify-center py-12 md:py-32 bg-gray-100 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <div className="flex justify-center">
                        <Logo>Tulos</Logo>
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">
                        Welcome Back!
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>
                        Log in to view your cart items and checkout. Don&apos;t miss out on
                        your favorite products!
                    </p>
                    <SignInButton mode="modal">
                        <Button className="w-full font-semibold" size="lg">
                            Sign in
                        </Button>
                    </SignInButton>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                    <div>Don&apos;t have an account?</div>
                    <SignUpButton mode="modal">
                        <Button variant="outline" className="w-full" size="lg">
                            Create an account
                        </Button>
                    </SignUpButton>
                </CardFooter>
            </Card>
        </div>
    );
};

export default NoAccessToCart;