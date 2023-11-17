import { ErrorAnalysis } from '@contentsquare/react-native-bridge';

export const URL = 'https://httpstatus-dev.eu-west-1.csq.fr';

export const useErrorAnalysis = () => {

  const setURLMaskingPatterns = (patterns: string[]) => {
    ErrorAnalysis.setURLMaskingPatterns(patterns);
  }

  const makeRequest = async(method: string, url: string) => {
    const data = {
      title: 'Error Analysis - testing API Errors',
    };

    const requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: method === 'POST' ? JSON.stringify(data) : undefined
    };

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok)
      console.log(`This is an HTTP error: ${response.status}`);
    } catch (error: any) {
      console.error('Error:', error);
    }
  }

  return { setURLMaskingPatterns, makeRequest };
};
