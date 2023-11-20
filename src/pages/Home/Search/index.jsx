import React, { useState } from "react";

const Search = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const [showLinkResult, setShowLinkResult] = useState(false);

  const [btnCopy, setBtnCopy] = useState(false);

  const handleShorten = async () => {
    const apiKey = "3974ad0a6399e47a541d210a8c71fe5f65bb1b68";

    try {
      const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ long_url: originalUrl }),
      });

      const data = await response.json();
      setShortenedUrl(data.link);
      setShowLinkResult(true); // Mostrar a div quando a URL é encurtada com sucesso
    } catch (error) {
      console.error("Erro ao encurtar URL:", error);
    }
  };

  // Copiando link curto
  const handleCopy = () => {
    if (shortenedUrl) {
      navigator.clipboard.writeText(shortenedUrl);
      setBtnCopy(!btnCopy); // Toggle para setar classe '.btnCopy'
    }
  };

  return (
    <>
      <div className="bg-container-search">
        <section className="container search">
          <div className="row bg-search">
            <div className="flex-space">
              <div className="grid-10 pl-3 fix-padding">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Shorten a link here..."
                  value={originalUrl}
                  onChange={(e) => setOriginalUrl(e.target.value)}
                />
              </div>
              <div className="grid-2">
                <button className="btn-2" onClick={handleShorten}>
                  Shorten It!
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mostrando resultados */}
      {showLinkResult && (
        <div className="container link-result mt-2">
          <div className="flex-space flex-wrap">
            {/* Link original */}
            <div className="flex-start-row p-3 color-black fix-pl">
              <a
                {...originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="color-black"
              >
                {originalUrl}
              </a>
            </div>

            {/* Link encurtado */}
            <div className="flex-start-row pr-3 fix-wrap">
              <div>
                {shortenedUrl && (
                  <div>
                    <a
                      href={shortenedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pr-3 color-primary"
                    >
                      {shortenedUrl}
                    </a>
                  </div>
                )}
              </div>

              <button
                onClick={handleCopy}
                className={`btn btn-copy color-white ${
                  btnCopy ? "btnCopy" : ""
                }`}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
