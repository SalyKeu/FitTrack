import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { client} from "../utils/supabaseClient";

type User = {
  id: string;
  email: string;
  userName?: string;
};
type AuthContextType = {
  user: User | null;
  loading: boolean;
  handleSignIn: (email: string, password: string) => Promise<string>;
  handleSignOut: () => Promise<void>;
  handleSignUp: (
    email: string,
    password: string,
    userName: string,
  ) => Promise<string>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const supabase = client;

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          userName: session.user.user_metadata?.userName,
          id: session.user.id,
          email: session.user.email ?? "",
        });
      } else {
        setUser(null);
      }
      setLoading(false);
      },
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  const handleSignIn = async (
    email: string,
    password: string,
  ): Promise<string> => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return error.message;
    return "Sign in successful";
  };

  const handleSignUp = async (
    email: string,
    password: string,
    userName: string,
  ): Promise<string> => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          userName,
        },
      },
    });

    if (error) return error.message;
    return "Sign up successful";
  };

  const handleSignOut = async (): Promise<void> => {
    setLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, handleSignIn, handleSignOut, handleSignUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};
