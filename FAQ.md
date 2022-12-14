# StaticDelivr Frequently Asked Questions

## Who runs StaticDelivr?



## Why is this necessary? Can't I just load files from GitHub directly?

When you request certain types of files (like JavaScript, CSS, or HTML) from
`raw.githubusercontent.com` or `gist.githubusercontent.com`, GitHub serves them
with a `Content-Type` header set to `text/plain`. As a result, most modern
browsers won't actually interpret these files as JavaScript, CSS, or HTML and
will instead just display them as text.

GitHub does this because serving raw files from a git repo is inefficient and
they want to discourage people from using their GitHub repos for static file
hosting.

StaticDelivr acts as a caching proxy. It forwards requests to GitHub, caches the
responses, and relays them to your browser with an appropriate `Content-Type`
header based on the extension of the file that was requested. The caching layer
ensures that minimal load is placed on GitHub, and you get quick and easy static
file hosting right from a GitHub repo. Everyone's happy!

## Is StaticDelivr associated with GitHub?

No, StaticDelivr is not associated with GitHub in any way. Please don't contact GitHub
asking for help with StaticDelivr.

## What's the difference between development and CDN URLs?

When you make a request to a `staticdelivr.up.railway.app` URL (a development URL), the StaticDelivr server loads the requested file from GitHub, serves it to your browser, and caches it for a short time. If you push new changes to GitHub, you can reload and see them within a few minutes. This makes dev URLs useful for testing or sharing demos during development, but it also puts more server load on StaticDelivr and GitHub.

Requests to `cdn.rawgit.com` (a CDN URL) are routed through [UCDN](https://ucdn.com/)'s super fast content delivery network and are cached **permanently** at the CDN layer based on the URL. This results in the best performance and reduces load on StaticDelivr and on GitHub, but it means that reloading won't fetch new changes from GitHub.

During development, when traffic is low and freshness is more important than performance, use a development URL. For anything you share with the public or push to production, use a CDN URL.

## Can I use a development URL on a production website or in public example code?

No. Only use development URLs for personal testing or for sharing temporary demos with a few people during development.

Don't use development URLs in example code or in public demos, because people often copy and paste that code and use it in production apps without realizing that they need to change the URLs. Then they send too much traffic to StaticDelivr, get throttled, and their apps break.

Use CDN URLs for anything you share with the general public.

## What will happen if a development URL gets large amounts of traffic?

First, requests will be throttled and the URL will start to load very slowly. If the traffic continues even after automatic throttling is triggered, requests for that URL (or for your entire GitHub account) may be blocked permanently.

## What will happen if a CDN URL gets large amounts of traffic?

Usually this is fine.

However, some people have begun using StaticDelivr to serve large collections of uniquely named files (often images). These unique URLs defeat the CDN's ability to efficiently cache files, which means requests can end up overloading StaticDelivr's origin server. In cases like this, I may block the excessive traffic to prevent the service from being degraded for other users.

Please don't use StaticDelivr for things like this.

## How long does the CDN cache files? How can I make it refresh my file?

The CDN caches files permanently based on their path. It ignores query strings.
This is done to improve performance and to make it possible for the CDN to
handle massive amounts of traffic without causing excessive load on StaticDelivr or
GitHub's servers.

To ensure that the CDN always serves the version of the file you want, use a git
tag or commit hash in the file's path instead of a branch name, and update the
URL if you push a new version of the file.

So, instead of a URL like `https://cdn.rawgit.com/user/repo/branch/file`, use a
URL like `https://cdn.rawgit.com/user/repo/tag/file` or
`https://cdn.rawgit.com/user/repo/commit/file`.

## I need guaranteed 100% uptime. Should I use cdn.rawgit.com?

No. StaticDelivr is a free, best-effort service and cannot provide any uptime or
support guarantees, even for the CDN.

While I do my best to keep things running, things sometimes go wrong. Sometimes
there are network or provider issues outside my control. Sometimes abusive
traffic temporarily affects response times. Sometimes things break while I'm
asleep and I don't know there are problems until I wake up. And sometimes I
break things by doing something dumb (although I try really hard not to).

Since I run RawGit in my spare time, with my own money and with CDN hosting
generously donated by [StackPath](https://stackpath.com/), it has a budget
that's probably less than you pay for coffee in a given month. My goal is to
help other open source developers get their projects up and running, but if you
need to serve files that are crucial to your business, you should pay for a host
with well-funded infrastructure and uptime guarantees.

## Why do anonymous gist URLs return 403 errors?

StaticDelivr doesn't serve anonymous gists because they're frequently used for illegal
or abusive content. Sorry.

## I moved a file in my repo and now old RawGit URLs are broken. Is there any way to redirect to the new file?

[There sure
is](https://github.com/rgrove/rawgit/wiki/How-to-redirect-a-RawGit-URL-to-another-URL-or-GitHub-file)
(for non-CDN URLs, anyway). But in the future, you might want to consider using
URLs based on a tag or commit ref rather than a branch, since tags and commits
always represent a single point in time and won't break if you move a file
later.

## Can I donate money/Bitcoin/pie to help you out?



## I have feedback or want to report a problem! Who can I contact?

-   To report a critical issue like RawGit being broken or to share general
    feedback, send a tweet to [@rawgit](https://twitter.com/rawgit) or
    [@yaypie](https://twitter.com/yaypie). I try to respond quickly when I'm
    awake and near a computer, but sometimes I do have to sleep. If you don't
    get a response, just wait longer.

-   To report a non-critical issue, please
    [file an issue](https://github.com/coozywana/staticdelivr/issues) on StaticDelivr's GitHub
    project.

-   To report a security concern, please email `security@rawgit.com` privately.
    Feel free to encrypt your email using [my public key](https://rawgit.com/public-key.txt)
    if you're paranoid. Expect a response within 48 hours.

-   To file a DMCA takedown notification or counter-notification, see
    [StaticDelivr's DMCA Notice & Takedown Procedure](DMCA.md)
