Layout UI and UX for all your users
Combination of

渐进式网络应用程序，意思就是我们一步一步把应用做的更好更完美，
今天讨论一下响应式布局

a. Fluid grid
b. Flexible images 
我们大多数静态资源和用户流量都花在图片或其他媒体
c. Media queries
通过 Media queries 把我们应用根据屏幕尺寸进行划分隔离。



响应式布局设计，这里响应不仅是响应不同设备的屏幕大小
1. 响应不同用户，现在我们每个人看到的京东或淘宝页面都个不相同。
2. 然后就是响应不同设备
3. 响应不同数据。在 wifi 或数据情况会精简数据显示，额外信息会询问用户是否显示或更新
Different users
Different devices
Different data needs/on wifi extra 

all of use bootstrap
我们设计方式，我们在开发静态页面其实流程也是一种渐进设计
html -> html+css -> html+css+javascript
1. 显示 html 罗列出页面内容和结构
2. css 来添加样式和尺寸和位置
3. js 增添一些特效

sizing elements matters // title

pwa golden rule
分享一些 pwa 布局设计的一些精粹
1. 我们避免在横屏幕上来滚动内容，如果这样想起来都挺傻。
never make users scroll horizontally


Relative sizing is not the (full) solution
one relative-size layout for all
2. 响应式布局很难通过一套样式让我们的应用在大屏台式机和小屏幕的移动设备看起来都那么顺眼
协调，我们需要作出一些牺牲。例如我们在大屏幕上适当在两边留出一定距离。
Too big on desktop, too small on mobile


Meida queries 





Mobile-first design
Media revisiting
我们重新审视一下响应式设计
1. 内容流
2. 找到适合设备和显示区域的最佳布局框架
3. 根据不仅布局框架，将内容按块进行划分
one stream of content
Find the best layout for devices and viewport size
Manipulate blocks of content for the needs of the layout

Match breakpoints to content
Start small
Add major breakpoints
Add minor breakpoints if nessary
Optimzie for reading: 70 - 80 characters per line



响应式内容，包括重新排序，重新定位，替换内容，移除部分内容，这些
内容都需要我们在设计布局一一考虑到
Manipulating content
Reorder 
Reposition
Replace
Remove(last resort)

what can we do with reponsive images?
Resolution
Display Size
Format support
Art direction

对于性能我们需要考虑一些因素
General principles for performance
第一原则就是尽量不用图片，
Avoid images wherever possible
那么不用图片，我们用什么来代替图片呢，我们可以考虑一些适量图格式如 svg 或 icon 字体
来代替图片达到同样的目的
User vector formats where possible:SVG or icon fonts
如果必须用图片我们要尽量在满足用户的要求的情况下实用低分辨率的图片
Use the lowest possible resolution and quality
图片格式也尽量选择适合网络的压缩格式如：WebP PNG JPEG
Use the right format for the image type: WebP PNG JPEG



Keep as simple as pos

可能有人了解 javascript 会根据不同的设备屏幕尺寸来调用不同方法。

Events  Funtional Events
install fetch
activate    sync    
message push


what is window.fetch?
Modern replacement for XMLHttpRequest:
1. Handles redirection, decodes common formats, etc.
2. Promise based( cleaner code)
3. Used by service workers, cache API etc
4. Implements Cross Origin Resource Sharing(CORS)*