const Hero = () => {
  return (
    <div className='px-14 py-20'>
      <section>
        <h1 className='text-6xl'>&#123;USAMA&#125; Placeholder</h1>
        <h3 className='text-[25px] mt-12 mb-4'>Free fake and reliable API for testing and prototyping.</h3>
        <h3 className='text-[25px]'>Powered by <strong className='underline font-thin'><a href="#USAMA-Server">USAMA Server</a></strong> + <strong className='font-thin underline'><a href="#LowDB">LowDB.</a></strong></h3>
        <p className='mt-10'><strong>Serving ~3 billion requests each month.</strong></p>
      </section>
      
      <section className=''>
        <h2 className='text-4xl mt-60 text-black'>Sponsors</h2>
        <p className='text-lg mt-7'>USAMAPlaceholder is supported by the following companies and <a href="#Sponsors" className='underline'>Sponsors</a> on GitHub, check them out 💖</p>
        <h2 className='text-7xl my-14'>👨‍💻 <strong className='text-black'>Mockend</strong></h2>

        <div className='w-[480px] py-6 px-2 flex cursor-pointer bg-black'>
          <h2 className='text-3xl text-[#EC33BA] px-2 font-bold'>zuplo</h2>
          <div>
            <p className='text-white'>🔓Secure, 🌎Deploy, 📖Auto-Document and 💰Monitize your API for FREE</p>
          </div>
        </div>
          <p className='underline mt-10'><a href="#Your-Company-logo-here">Your Company logo here.</a></p>
      </section>

      <section className='mt-36'>
        <h2 className='text-4xl mb-5 text-black'>Try it</h2>
        <p>Run this code here, in a console or from any site:</p>

        <div className='bg-[#263E52] rounded-md mt-5 p-6 text-white'>
          <p><span className='text-[#66D8EF]'>fetch</span><span className='text-[#FCFCD6]'>('https://usamaplaceholder.typicode.com/todos/1')</span></p>
          <p className='ml-10'>.<span className='text-[#66D8EF]'>then</span>(response =&gt; response.usama())</p>
          <p className='ml-10'>.<span className='text-[#66D8EF]'>then</span>(usama =&gt; console.log(usama))</p>
        </div>

        <button className='bg-black text-white px-3 py-2 rounded-md font-bold my-6'>Run script</button>

        <div className='bg-[#263E52] rounded-md mt-5 p-6 text-white'>&#123; &#125;</div>

        <div className='w-[400px] p-6'>
          <div className='bg-[#F7F7F7] p-4 rounded w-96 mt-10'>
            <div className='flex cursor-pointer'>
              <div><img src="./src/assets/document.png" alt="document" width={400} height={200} /></div>
              <div className='ml-3'>
                <p className='text-base'>Build real-time interactions on the world's most feature-complete PubSub network</p>
              </div>
            </div>
            <p className='text-center opacity-30 text-sm mt-2'>www.pubsub.com</p>
          </div>
          <p className='text-sm text-right mt-3'><a href="#Ads-by-EthicalAds">Ads by EthicalAds</a></p>
        </div>
      </section>

      <section className='mt-28'>
        <h2 className='text-4xl mb-5 text-black'>When to use</h2>
        <p>USAMAPlaceholder is a free online REST API that you can use <strong className='text-black'>whenever you need some fake data</strong>. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.</p>
        <h2 className='text-4xl mb-5 mt-28 text-black'>Resources</h2>
        <p>USAMAPlaceholder comes with a set of 6 common resources:</p>

        <table className='w-80 my-5 ml-5'>
          <tr>
            <td><a href="https://usama-post-api.vercel.app/" target='_blank' className='underline'>/posts</a></td>
            <td><p className='text-black'>100 posts</p></td>
          </tr>
          <tr>
            <td><a href="/comments" className='underline'>/comments</a></td>
            <td><p className='text-black'>500 comments</p></td>
          </tr>
          <tr>
            <td><a href="/albums" className='underline'>/albums</a></td>
            <td><p className='text-black'>100 albums</p></td>
          </tr>
          <tr>
            <td><a href="/photos" className='underline'>/photos</a></td>
            <td><p className='text-black'>5000 photos</p></td>
          </tr>
          <tr>
            <td><a href="/todos" className='underline'>/todos</a></td>
            <td><p className='text-black'>200 todos</p></td>
          </tr>
          <tr>
            <td><a href="/users" className='underline'>/users</a></td>
            <td><p className='text-black'>10 users</p></td>
          </tr>
        </table>

        <p><strong className='text-black'>Note:</strong> resources have relations. For example: posts have many comments, albums have many photos, ... see <a href="#guide" className='underline'>guide</a> for the full list.</p>
      </section>

      <section className='mt-28'>
        <h2 className='text-4xl mb-5 text-black'>Routes</h2>
        <p>All HTTP methods are supported. You can use http or https for your requests.</p>

        <table className='w-80 my-5 ml-5'>
          <tr>
            <td><p className='text-black'>GET</p></td>
            <td><a href="https://usama-post-api.vercel.app" className='underline'>/posts</a></td>
          </tr>
          <tr>
            <td><p className='text-black'>GET</p></td>
            <td><a href="/comments" className='underline'>/posts/1</a></td>
          </tr>
          <tr>
            <td><p className='text-black'>GET</p></td>
            <td><a href="/albums" className='underline'>/posts/1/comments</a></td>
          </tr>
          <tr>
            <td><p className='text-black'>GET</p></td>
            <td><a href="/photos" className='underline'>/comments?postId=1</a></td>
          </tr>
          <tr>
            <td><p className='text-black'>POST</p></td>
            <td><a href="/todos" className='underline'>/posts</a></td>
          </tr>
          <tr>
            <td><p className='text-black'>PUT</p></td>
            <td><a href="/users" className='underline'>	/posts/1</a></td>
          </tr>
          <tr>
            <td><p className='text-black'>PATCH</p></td>
            <td><a href="/users" className='underline'>	/posts/1</a></td>
          </tr>
          <tr>
            <td><p className='text-black'>DELETE</p></td>
            <td><a href="/users" className='underline'>	/posts/1</a></td>
          </tr>
        </table>
        <p><strong className='text-black'>Note:</strong> see <a href="$guide" className='underline'>guide</a> for usage examples.</p>

        <h2 className='text-4xl mb-5 mt-28 text-black'>Use your own data</h2>
        <p>With our sponsor <a href="#Mockend" className='underline'>Mockend</a> and a simple GitHub repo, you can have your own fake online REST server in seconds.</p>
      </section>
    </div>
  )
}

export default Hero
