"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import GoogleIcon from "../../public/google.svg";
import Image from "next/image";

export function GitHubLoginButton() {
    return (
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => signIn("github")}
        > 
            <GithubIcon />
        </Button>
    )
};

export function GoogleLoginButton() {
    return (
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => signIn("google")}
        > 
            <Image src={GoogleIcon} alt="google-icon" />
        </Button>
    )
};