const oauthSignature = require("oauth-signature");

class TwitterUtility{

    constructor(httpMethod, url, params, consumerKey, consumerKeySecret, token, tokenSecret){
        this.httpMethod = httpMethod.toUpperCase();
        this.url = "https://api.twitter.com/oauth/request_token";
        this.params = params;
        this.consumerKey = consumerKey;
        this.consumerKeySecret = consumerKeySecret;
        this.token = token;
        this.tokenSecret = tokenSecret;
        this.timestamp=0;
    };

    getAuthenticationHeader(){
        return {
            Authorization: `OAuth ${this.getOatuhConsumerKey()},${this.getOauthNonce()},${this.getOauthSignature()},${this.getOauthSignatureMethod()},${this.getOauthTimestamp()},${this.getOauthToken()},${this.getOauthVersion()}`
        };
    }

    getOatuhConsumerKey(){
        return `oauth_consumer_key=${this.consumerKey}`
    }

    getOauthNonce(){
        return `oauth_nonce=kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg`;
    }

    getOauthSignature(){
        /* let headerParams2 = {
            oauth_consumer_key: this.consumerKey,
            oauth_token: this.token,
            oauth_nonce: 'kllo9940pd9333jh',
            oauth_timestamp: new Date().getTime,
            oauth_signature_method: 'HMAC-SHA1',
            oauth_version : '1.0',
        }; */
        let headerParams= `oauth_consumer_key="${this.consumerKey}"&oauth_token="${this.token}"&oauth_nonce="kllo9940pd9333jh"&oauth_timestamp="${this.timestamp}"&oauth_signature_method="HMAC-SHA1"&oauth_version="1.0"`

        return `oauth_signature="${oauthSignature.generate(this.httpMethod, this.url, headerParams,this.consumerKeySecret, this.tokenSecret)}"`;
    }
    
    getOauthSignatureMethod(){
        return `oauth_signature_method="HMAC-SHA1"`;
    }

    getOauthTimestamp(){
        this.timestamp = Math.round(new Date().getTime() / 1000);
        return `oauth_timestamp="${this.timestamp}"`;
    }

    getOauthToken(){
        return `oauth_token="${this.token}"`;
    }

    getOauthVersion(){
        return `oauth_version="1.0"`;
    }


}

module.exports =  TwitterUtility;