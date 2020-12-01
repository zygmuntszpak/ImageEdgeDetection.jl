var documenterSearchIndex = {"docs":
[{"location":"reference/#function_reference","page":"Function Reference","title":"Function References","text":"","category":"section"},{"location":"reference/","page":"Function Reference","title":"Function Reference","text":"Pages = [\"reference.md\"]\nDepth = 3","category":"page"},{"location":"reference/#General-function","page":"Function Reference","title":"General function","text":"","category":"section"},{"location":"reference/","page":"Function Reference","title":"Function Reference","text":"detect_edges\ndetect_edges!\ndetect_subpixel_edges\ndetect_subpixel_edges!\ndetect_gradient_orientation\ndetect_gradient_orientation!\nthin_edges\nthin_edges!\nthin_subpixel_edges\nthin_subpixel_edges!","category":"page"},{"location":"reference/#ImageEdgeDetection.EdgeDetectionAPI.detect_edges","page":"Function Reference","title":"ImageEdgeDetection.EdgeDetectionAPI.detect_edges","text":"out = detect_edges([T::Type,] img, f::AbstractEdgeDetectionAlgorithm, args...; kwargs...)\n\nDetect edges of img using algorithm f;  if left unspecified, f is assumed to be Canny.\n\nOutput\n\nThe return image out is an Array{T}. If T is not specified, then it's inferred.\n\nExamples\n\nJust simply pass the input image and algorithm to detect_edges\n\nf = Canny(spatial_scale = 1.4)\nimg_edges = detect_edges(img, f)\n\nThis reads as \"detect_edges of image img using algorithm f\".\n\nYou can also explicitly specify the return type:\n\nf = Canny(spatial_scale = 1.4)\nimg_edges_float32 = detect_edges(Gray{Float32}, img, f)\n\nSee also detect_edges! for in-place edge detection.\n\n\n\n\n\n","category":"function"},{"location":"reference/#ImageEdgeDetection.EdgeDetectionAPI.detect_edges!","page":"Function Reference","title":"ImageEdgeDetection.EdgeDetectionAPI.detect_edges!","text":"detect_edges!([out,] img, f::AbstractEdgeDetectionAlgorithm, args...; kwargs...)\n\nDetect edges of img using algorithm f;  if left unspecified, f is assumed to be Canny.\n\nOutput\n\nIf out is specified, it will be changed in place. Otherwise img will be changed in place.\n\nExamples\n\nJust simply pass an algorithm to detect_edges!:\n\nimg_edges = similar(img)\ndetect_edges!(img_edges, img, f)\n\nFor cases you just want to change img in place, you don't necessarily need to manually allocate img_edges; just use the convenient method:\n\ndetect_edges!(img, f)\n\nSee also: detect_edges\n\n\n\n\n\n","category":"function"},{"location":"reference/#ImageEdgeDetection.EdgeDetectionAPI.detect_subpixel_edges","page":"Function Reference","title":"ImageEdgeDetection.EdgeDetectionAPI.detect_subpixel_edges","text":"out₁, out₂ = detect_subpixel_edges([T₁::Type, T₂::Type], img, f::AbstractEdgeDetectionAlgorithm, args...; kwargs...)\n\nDetect edges of img to subpixel precision using algorithm f;  if left unspecified, f is assumed to be Canny.\n\nOutput\n\nThe integer components of an edge correspond to non-zero row and column entries in out₁ which is an Array{T₁}. The accompanying subpixel offsets  are stored in a 2-D array out₂ as length-2 vectors (Array{SVector{2, T₂}}). One can recover the  subpixel coordinates by adding the subpixel offsets to the integer components.\n\nExamples\n\nJust simply pass the input image and algorithm to detect_subpixel_edges\n\nf = Canny(spatial_scale = 1.4, thinning_algorithm = SubpixelNonmaximaSuppression())\nimg_edges, offsets = detect_subpixel_edges(img, f)\n\nThis reads as \"detect_subpixel_edges of image img using algorithm f\".\n\nYou can also explicitly specify the return types:\n\nf = Canny(spatial_scale = 1.4, thinning_algorithm = SubpixelNonmaximaSuppression())\nimg_edges, offsets = detect_subpixel_edges(Gray{Float32}, Float32, img, f)\n\nSee also detect_subpixel_edges! for in-place edge detection.\n\n\n\n\n\n","category":"function"},{"location":"reference/#ImageEdgeDetection.EdgeDetectionAPI.detect_subpixel_edges!","page":"Function Reference","title":"ImageEdgeDetection.EdgeDetectionAPI.detect_subpixel_edges!","text":"detect_subpixel_edges!(out₁, out₂, img, f::AbstractEdgeDetectionAlgorithm, args...; kwargs...)\n\nDetect edges of img to subpixel precision using algorithm f;  if left unspecified, f is assumed to be Canny.\n\nOutput\n\nThe integer components of an edge correspond to non-zero row and column entries in out₁. The accompanying subpixel offsets  are stored in a 2-D array out₂ as length-2 vectors. One can recover the  subpixel coordinates by adding the subpixel offsets to the integer components.\n\nExamples\n\nJust simply pass an algorithm to detect_subpixel_edges!:\n\nf = Canny(spatial_scale = 1.4, thinning_algorithm = SubpixelNonmaximaSuppression())\nimg_edges = similar(img)\noffsets = zeros(SVector{2,Float64}, axes(img))\ndetect_edges!(img_edges, offsets, img, f)\n\nSee also: detect_subpixel_edges\n\n\n\n\n\n","category":"function"},{"location":"reference/#ImageEdgeDetection.detect_gradient_orientation","page":"Function Reference","title":"ImageEdgeDetection.detect_gradient_orientation","text":"detect_gradient_orientation(g₁::AbstractArray, g₂::AbstractArray, orientation_convention::OrientationConvention, args...; kwargs...)\n\nGiven the gradient in the first (g₁) and second (g₂) spatial dimensions, returns the gradient orientation, where the orientation is interpreted according to a supplied OrientationConvention.\n\nDetails\n\nYou can specify how you want the gradient orientation to be reported by supplying an OrientationConvention. If left unspecified the orientation is measured counter-clockwise from the south direction. This is because in a Raster coordinate system, the first spatial dimension increases as one goes down the image (i.e. it points south), and the second spatial dimension increases as one moves to the right of the image (i.e. it points east).\n\nIf you wish to interpret the orientation in a canonical Cartesian coordinate convention you would specify east as the reference compass direction (compass_direction = 'E') and a counter-clockwise direction (clockwise = false).\n\nOutput\n\nReturns a two-dimensional array of angles. If in_radians = true the valid angles are reported in the range of [0...2π), otherwise they are reported in the range [0...360). The values 2π and 360 are used as sentinels to designate undefined angles (because the gradient magnitude was too close to zero). By default, an angle is undefined if (abs(g₁) < tol && abs(g₂) < tol) where g₁ and g₂ denote the gradient in the first and second spatial dimensions, and tol = sqrt(eps(Float64)) (as defined in OrientationConvention).\n\nSee also: detect_gradient_orientation!\n\n\n\n\n\n","category":"function"},{"location":"reference/#ImageEdgeDetection.detect_gradient_orientation!","page":"Function Reference","title":"ImageEdgeDetection.detect_gradient_orientation!","text":"detect_gradient_orientation(out::AbstractArray, g₁::AbstractArray, g₂::AbstractArray, orientation_convention::OrientationConvention, args...; kwargs...)\n\nGiven the gradient in the first (g₁) and second (g₂) spatial dimensions, returns the gradient orientation in out, where the orientation is interpreted according to a supplied OrientationConvention.\n\nDetails\n\nYou can specify how you want the gradient orientation to be reported by supplying an OrientationConvention. If left unspecified the orientation is measured counter-clockwise in radians from the south direction. This is because in a Raster coordinate system, the first spatial dimension increases as one goes down the image (i.e. it points south), and the second spatial dimension increases as one moves to the right of the image (i.e. it points east).\n\nIf you wish to interpret the orientation in a canonical Cartesian coordinate convention you would specify east as the reference compass direction (compass_direction = 'E') and a counter-clockwise direction (clockwise = false).\n\nOutput\n\nReturns a two-dimensional array of angles. If in_radians = true genuine angles are reported in the range of [0...2π), otherwise they are reported in the range [0...360). The values 2π and 360 are used as sentinels to designate undefined angles (because the gradient magnitude was too close to zero). By default, an angle is undefined if (abs(g₁) < tol && abs(g₂) < tol) where g₁ and g₂ denote the gradient in the first and second spatial dimensions, and tol = sqrt(eps(eltype(out))) (as defined in OrientationConvention).\n\nSee also: detect_gradient_orientation\n\n\n\n\n\n","category":"function"},{"location":"reference/#ImageEdgeDetection.EdgeDetectionAPI.thin_edges","page":"Function Reference","title":"ImageEdgeDetection.EdgeDetectionAPI.thin_edges","text":"thin_edges([T::Type,] mag, g₁, g₂, f::AbstractEdgeThinningAlgorithm, args...; kwargs...)\n\nUsing algorithm f, thin the edge-response based on the edge magnitude mag, the  gradient in the first spatial dimension g₁, and the gradient in the second spatial dimension g₂.\n\nOutput\n\nReturns an Array{T} representing the thinned edge response.\n\nIf T is not specified, then it's inferred. Note that T must represent or wrap a floating point number.\n\nExamples\n\nJust simply pass the input image and algorithm to thin_edges\n\nusing TestImages, ImageFiltering\nimg =  Gray.(testimage(\"mandril\"))\n\n# Gradient in the first and second spatial dimension\ng₁, g₂ = imgradients(img, KernelFactors.scharr)\n\n# Gradient magnitude\nmag = hypot.(g₁, g₂)\n\nf = NonmaximaSuppression(threshold = Percentile(10))\n\nthinned_edges = thin_edges(mag, g₁, g₂, f)\n\nThis reads as \"thin_edges based on the edge response magnitude, and spatial gradients, using algorithm f\".\n\nYou can also explicitly specify the return type:\n\nthinned_edges_float32 = thin_edges(Gray{Float32}, mag, g₁, g₂, f)\n\nSee also thin_edges! for in-place edge thinning.\n\n\n\n\n\n","category":"function"},{"location":"reference/#ImageEdgeDetection.EdgeDetectionAPI.thin_edges!","page":"Function Reference","title":"ImageEdgeDetection.EdgeDetectionAPI.thin_edges!","text":"thin_edges!([out,] mag, g₁, g₂, f::AbstractEdgeThinningAlgorithm, args...; kwargs...)\n\nIsolate local maxima of gradient magnitude mag along the local gradient direction. The arguments g₁ and g₂ represent the  gradient in the first spatial dimension (y), and the second spatial dimension (x), respectively.\n\nOutput\n\nIf out is specified, it will be changed in place. Otherwise mag will be changed in place.\n\nExamples\n\nJust simply pass an algorithm to thin_edges!:\n\nusing TestImages, ImageFiltering\nimg =  Gray.(testimage(\"mandril\"))\n\n# Gradient in the first and second spatial dimension\ng₁, g₂ = imgradients(img, KernelFactors.scharr)\n\n# Gradient magnitude\nmag = hypot.(g₁, g₂)\n\nf = SubpixelNonmaximaSuppression(threshold = Percentile(10))\n\nthinned_edges = zeros(eltype(mag), axes(mag))\nthin_edges!(thinned_edges, mag, g₁, g₂, f)\n\nFor cases you just want to change mag in place, you don't necessarily need to manually allocate thinned_edges; just use the convenient method:\n\nthin_edges!(mag, g₁, g₂, f)\n\nSee also: thin_edges\n\n\n\n\n\n","category":"function"},{"location":"reference/#ImageEdgeDetection.EdgeDetectionAPI.thin_subpixel_edges","page":"Function Reference","title":"ImageEdgeDetection.EdgeDetectionAPI.thin_subpixel_edges","text":"out₁, out₂ = thin_subpixel_edges(mag, g₁, g₂, f::AbstractEdgeThinningAlgorithm, args...; kwargs...)\n\nIsolate local maxima of gradient magnitude mag along the local gradient direction. The arguments g₁ and g₂ represent the  gradient in the first spatial dimension (y), and the second spatial dimension (x), respectively.\n\nOutput\n\nThe integer components of the local maxima correspond to non-zero row and column entries in out₁. The accompanying subpixel offsets  are stored in a 2-D array out₂ as length-2 vectors. One can recover the  subpixel coordinates by adding the subpixel offsets to the integer components.\n\nExamples\n\nJust simply pass an algorithm to thin_subpixel_edges:\n\nusing TestImages, ImageFiltering\nimg =  Gray.(testimage(\"mandril\"))\n\n# Gradient in the first and second spatial dimension\ng₁, g₂ = imgradients(img, KernelFactors.scharr)\n\n# Gradient magnitude\nmag = hypot.(g₁, g₂)\n\nf = SubpixelNonmaximaSuppression(threshold = Percentile(10))\n\nthinned_edges, offsets = thin_subpixel_edges(mag, g₁, g₂, f)\n\nSee also: thin_subpixel_edges!\n\n\n\n\n\n","category":"function"},{"location":"reference/#ImageEdgeDetection.EdgeDetectionAPI.thin_subpixel_edges!","page":"Function Reference","title":"ImageEdgeDetection.EdgeDetectionAPI.thin_subpixel_edges!","text":"thin_subpixel_edges!(out₁, out₂, mag, g₁, g₂, f::AbstractEdgeThinningAlgorithm, args...; kwargs...)\n\nIsolate local maxima of gradient magnitude mag along the local gradient direction. The arguments g₁ and g₂ represent the  gradient in the first spatial dimension (y), and the second spatial dimension (x), respectively.\n\nOutput\n\nThe integer components of the local maxima correspond to non-zero row and column entries in out₁. The accompanying subpixel offsets  are stored in a 2-D array out₂ as length-2 vectors. One can recover the  subpixel coordinates by adding the subpixel offsets to the integer components.\n\nExamples\n\nJust simply pass an algorithm to thin_subpixel_edges!:\n\nusing TestImages, ImageFiltering\nimg =  Gray.(testimage(\"mandril\"))\n\n# Gradient in the first and second spatial dimension\ng₁, g₂ = imgradients(img, KernelFactors.scharr)\n\n# Gradient magnitude\nmag = hypot.(g₁, g₂)\n\nf = SubpixelNonmaximaSuppression(threshold = Percentile(10))\n\nthinned_edges = zeros(eltype(mag), axes(mag))\noffsets = zeros(SVector{2,Float64}, axes(mag))\nthin_subpixel_edges!(thinned_edges, offsets, mag, g₁, g₂, f)\n\nSee also: thin_subpixel_edges\n\n\n\n\n\n","category":"function"},{"location":"reference/#Edge-Detection-Algorithms","page":"Function Reference","title":"Edge Detection Algorithms","text":"","category":"section"},{"location":"reference/","page":"Function Reference","title":"Function Reference","text":"ImageEdgeDetection.EdgeDetectionAPI.AbstractEdgeDetectionAlgorithm","category":"page"},{"location":"reference/#ImageEdgeDetection.EdgeDetectionAPI.AbstractEdgeDetectionAlgorithm","page":"Function Reference","title":"ImageEdgeDetection.EdgeDetectionAPI.AbstractEdgeDetectionAlgorithm","text":"AbstractEdgeDetectionAlgorithm <: AbstractImageFilter\n\nThe root type for ImageEdgeDetection package.\n\nAny concrete edge detection algorithm shall subtype it to support detect_edges, detect_edges!, detect_subpixel_edges and detect_subpixel_edges! APIs.\n\nExamples\n\nAll edge detection algorithms in ImageEdgeDetection are called in the following pattern:\n\n# first generate an algorithm instance\nf = Canny()\n\n# then pass the algorithm to `detect_edges`\nimg_edges = detect_edges(img, f)\n\n# or use in-place version `detect_edges!`\nimg_edges = similar(img)\ndetect_edges!(img_edges, img, f)\n\nFor more examples, please check detect_edges, detect_edges! and concrete algorithms.\n\nOne can also detect edges to subpixel accuracy by specifying SubpixelNonmaximaSuppression as the edge thinning algorithm and using detect_subpixel_edges or detect_subpixel_edges!. The function returns an edge image as well as a accompanying matrix of length-2 vectors which, when added to the edge image coordinates, specify the location of an edge to subpixel precision.\n\n# first generate an algorithm instance\nf = Canny(thinning_algorithm = SubpixelNonmaximaSuppression())\n\n# then pass the algorithm to `detect_subpixel_edges`\nimg_edges, subpixel_offsets = detect_subpixel_edges(img, f)\n\n# or use in-place version `detect_edges!`\nimg_edges = similar(img)\nsubpixel_offsets = zeros(SVector{2,Float64}, axes(img))\ndetect_edges!(img_edges, subpixel_offsets, img, f)\n\n\n\n\n\n","category":"type"},{"location":"reference/#Canny","page":"Function Reference","title":"Canny","text":"","category":"section"},{"location":"reference/","page":"Function Reference","title":"Function Reference","text":"ImageEdgeDetection.Canny","category":"page"},{"location":"reference/#ImageEdgeDetection.Canny","page":"Function Reference","title":"ImageEdgeDetection.Canny","text":"    Canny <: AbstractEdgeDetectionAlgorithm\n    Canny(; spatial_scale = 1, high = Percentile(80), low = Percentile(20), thinning_algorithm = NonmaximaSuppression(threshold = low))\n\n    detect_edges([T,] img, f::Canny)\n    detect_edges!([out,] img, f::Canny)\n    detect_subpixel_edges([T₁, T₂] img, f::Canny)\n    detect_subpixel_edges!(out₁, out₂, img, f::Canny)\n\nReturns a binary image depicting the edges of the input image.\n\nDetails\n\nTODO\n\nOptions\n\nVarious options for the parameters of the detect_edges function and Canny type are described in more detail below.\n\nChoices for img\n\nThe detect_edges function can handle a variety of input types. By default the type of the returned image matches the type of the input image.\n\nFor colored images, the input is converted to grayscale.\n\nChoices for spatial_scale in Canny.\n\nThe spatial_scale determines the radius (σ) of the Gaussian filter. It must be a positive real number.\n\nChoices for high and low in Canny.\n\nThe hysteresis thresholds high and low (high > low) can be specified as positive numbers, or as Percentiles. If left unspecified, a default value of high = Percentile(80) and low = Percentile(20) is assumed.\n\nChoices for thinning_algorithm in Canny.\n\nYou can specify an AbstractEdgeThinningAlgorithm. By default, the NonmaximaSuppression algorithm is used which suppresses non-maxima up to pixel-level accuracy. For subpixel precision specify the SubpixelNonmaximaSuppression algorithm.\n\nExample\n\n\nusing TestImages, FileIO, ImageView\n\nimg =  testimage(\"mandril_gray\")\nimg_edges = detect_edges(img, Canny(spatial_scale = 1.4))\n\nimshow(img)\nimshow(img_edges)\n\nReferences\n\nJ. Canny, \"A Computational Approach to Edge Detection,\" in IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. PAMI-8, no. 6, pp. 679-698, Nov. 1986, doi: 10.1109/TPAMI.1986.4767851.\n\n\n\n\n\n","category":"type"},{"location":"reference/#Edge-Thinning-Algorithms","page":"Function Reference","title":"Edge Thinning Algorithms","text":"","category":"section"},{"location":"reference/","page":"Function Reference","title":"Function Reference","text":"ImageEdgeDetection.EdgeDetectionAPI.AbstractEdgeThinningAlgorithm","category":"page"},{"location":"reference/#ImageEdgeDetection.EdgeDetectionAPI.AbstractEdgeThinningAlgorithm","page":"Function Reference","title":"ImageEdgeDetection.EdgeDetectionAPI.AbstractEdgeThinningAlgorithm","text":"AbstractEdgeThinningAlgorithm <: AbstractImageFilter\n\nA root type for ImageEdgeDetection package.\n\nAny concrete edge thinning algorithm shall subtype it to support thin_edges, thin_edges!, thin_subpixel_edges and thin_subpixel_edges!  APIs.\n\nExamples\n\nAll edge thinning algorithms in ImageEdgeDetection are called in the following pattern:\n\n# first generate an algorithm instance\nf = NonmaximaSuppression()\n\n# determine the image gradients\ng₁, g₂ = imgradients(img, KernelFactors.scharr)\n\n# determine the gradient magnitude\nmag = hypot.(g₁, g₂)\n\n# then pass the algorithm to `thin_edges`\nthinned_edges = thin_edges(mag, g₁, g₂, f)\n\n# or use in-place version `thin_edges!`\nthinned_edges = zeros(eltype(mag), axes(mag))\nthin_edges!(thinned_edges, mag, g₁, g₂, f)\n\nFor more examples, please check thin_edges, thin_edges! and concrete algorithms.\n\nOne can also perform non-maxima suppression to subpixel precision using thin_subpixel_edges and thin_subpixel_edges!. The function returns an edge image as well as a accompanying matrix of length-2 vectors which, when added to the edge image coordinates, specify the location of an edge to subpixel precision.\n\n\n\n\n\n","category":"type"},{"location":"reference/#Non-maxima-Suppression","page":"Function Reference","title":"Non-maxima Suppression","text":"","category":"section"},{"location":"reference/","page":"Function Reference","title":"Function Reference","text":"ImageEdgeDetection.NonmaximaSuppression","category":"page"},{"location":"reference/#ImageEdgeDetection.NonmaximaSuppression","page":"Function Reference","title":"ImageEdgeDetection.NonmaximaSuppression","text":"    NonmaximaSuppression <: AbstractEdgeThinningAlgorithm\n    NonmaximaSuppression(; threshold::Union{Number, Percentile} = Percentile(20))\n\n    f = NonmaximaSuppression()\n    f(out::AbstractArray, mag::AbstractArray, g₁::AbstractArray, g₂::AbstractArray, f::NonmaximaSuppression)\n\nIsolates local maxima of gradient magnitude mag along the local gradient direction and stores the result in out.  The arguments g₁ and g₂ represent the  gradient in the first spatial dimension (y), and the second spatial dimension (x), respectively.\n\nDetails\n\nTODO\n\nExample\n\n\nusing TestImages, FileIO, ImageView, ImageEdgeDetection, ImageFiltering\n\nimg =  testimage(\"mandril_gray\")\n\n# Gradient in the first and second spatial dimension\ng₁, g₂ = imgradients(img, KernelFactors.scharr)\n\n# Gradient magnitude\nmag = hypot.(g₁, g₂)\n\nnms = zeros(eltype(mag), axes(mag))\n# Instantiate the NonmaximaSuppression functor.\nf = NonmaximaSuppression()\n\n# Suppress the non-maximal gradient magnitudes and store the result in `nms`.\nf(nms, mag, g₁, g₂)\n\nimshow(img)\nimshow(mag)\nimshow(nms)\n\nReferences\n\nJ. Canny, \"A Computational Approach to Edge Detection,\" in IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. PAMI-8, no. 6, pp. 679-698, Nov. 1986, doi: 10.1109/TPAMI.1986.4767851.\n\n\n\n\n\n","category":"type"},{"location":"reference/#Non-maxima-Suppression-(Subpixel)","page":"Function Reference","title":"Non-maxima Suppression (Subpixel)","text":"","category":"section"},{"location":"reference/","page":"Function Reference","title":"Function Reference","text":"ImageEdgeDetection.SubpixelNonmaximaSuppression","category":"page"},{"location":"reference/#ImageEdgeDetection.SubpixelNonmaximaSuppression","page":"Function Reference","title":"ImageEdgeDetection.SubpixelNonmaximaSuppression","text":"    SubpixelNonmaximaSuppression <: AbstractEdgeThinningAlgorithm\n    SubpixelNonmaximaSuppression(; threshold::Union{Number, Percentile} = Percentile(20))\n\n    f = SubpixelNonmaximaSuppression()\n    f(out₁::AbstractArray, out₂::Matrix{<:AbstractArray}, mag::AbstractArray, g₁::AbstractArray, g₂::AbstractArray, f::SubpixelNonmaximaSuppression)\n\nIsolates local maxima of gradient magnitude mag along the local gradient direction to subpixel precision.  The arguments g₁ and g₂ represent the gradient in the first spatial dimension (y), and the second spatial dimension (x), respectively.\n\nThe integer components of the local maxima correspond to non-zero row and column entries out₁. The accompanying subpixel offsets  are stored in a 2-D array out₂ as length-2 vectors. One can recover the  subpixel coordinates by adding the subpixel offsets to the integer components.\n\nDetails\n\nTODO\n\nExample\n\n\nusing TestImages, FileIO, ImageView, ImageEdgeDetection, ImageFiltering\n\nimg =  testimage(\"mandril_gray\")\n\n# Gradient in the first and second spatial dimension\ng₁, g₂ = imgradients(img, KernelFactors.scharr)\n\n# Gradient magnitude\nmag = hypot.(g₁, g₂)\n\nnms = zeros(eltype(mag), axes(mag))\nsubpixel_offsets = zeros(SVector{2,Float64}, axes(mag))\n\n# Instantiate the NonmaximaSuppression functor.\nf = SubpixelNonmaximaSuppression()\n\n# Suppress the non-maximal gradient magnitudes and store the result in `nms`.\nf(nms, subpixel_offsets, mag, g₁, g₂)\n\nimshow(img)\nimshow(mag)\nimshow(nms)\n\nReferences\n\nJ. Canny, \"A Computational Approach to Edge Detection,\" in IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. PAMI-8, no. 6, pp. 679-698, Nov. 1986, doi: 10.1109/TPAMI.1986.4767851.\nF. Devernay, \"A non-maxima suppression method for edge detection with sub-pixel accuracy\", Tech. Report RR-2724, INRIA, 1995.\n\n\n\n\n\n","category":"type"},{"location":"reference/#OrientationConvention","page":"Function Reference","title":"OrientationConvention","text":"","category":"section"},{"location":"reference/","page":"Function Reference","title":"Function Reference","text":"ImageEdgeDetection.OrientationConvention","category":"page"},{"location":"reference/#ImageEdgeDetection.OrientationConvention","page":"Function Reference","title":"ImageEdgeDetection.OrientationConvention","text":"    OrientationConvention(; compass_direction::AbstractChar = 'S', is_clockwise::Bool = false, in_radians = true, tol = sqrt(eps(Float64)))\n\nSpecifies the coordinate system context for detect_gradient_orientation which determines the meaning of the angles (the gradient orientations).\n\nDetails\n\nYou can specify how you want the gradient orientation to be reported.  By default, the orientation is measured counter-clockwise from the south direction. This is because in a Raster coordinate system, the first spatial dimension increases as one goes down the image (i.e. it points south), and the second spatial dimension increases as one moves to the right of the image (i.e. it points east).\n\nIf you wish to interpret the orientation in a canonical Cartesian coordinate convention you would specify east as the reference compass direction (compass_direction = 'E') and a counter-clockwise direction (clockwise = false).\n\nIf in_radians = true the valid angles are reported in the range of [0...2π), otherwise they are reported in the range [0...360). The values 2π and 360 are used as sentinels to designate undefined angles (because the gradient magnitude was too close to zero). By default, an angle is undefined if (abs(g₁) < tol && abs(g₂) < tol) where g₁ and g₂ denote the gradient in the first and second spatial dimensions, and tol = sqrt(eps(Float64)).\n\nExample\n\n\nusing TestImages, FileIO, ImageView, ImageEdgeDetection, ImageFiltering\n\nimg =  testimage(\"mandril_gray\")\n\n# Gradient in the first and second spatial dimension\ng₁, g₂ = imgradients(img, KernelFactors.scharr)\n\n# Interpret the angles with respect to a canonical Cartesian coordinate system\n# where the angles are measured counter-clockwise from the positive x-axis.\n\norientation_convention = OrientationConvention(in_radians = true,\n                                               is_clockwise = false,\n                                               compass_direction = 'E')\nangles = detect_gradient_orientation(g₁, g₂, orientation_convention)\n\n\n\n\n\n\n","category":"type"},{"location":"reference/#Supplementary-Types","page":"Function Reference","title":"Supplementary Types","text":"","category":"section"},{"location":"reference/","page":"Function Reference","title":"Function Reference","text":"ImageEdgeDetection.Percentile","category":"page"},{"location":"reference/#ImageEdgeDetection.Percentile","page":"Function Reference","title":"ImageEdgeDetection.Percentile","text":"Percentile(x)\n\nIndicate that x should be interpreted as a percentile rather than an absolute value. For example,\n\ndetect_edges(img, Canny(high = 80, low = 20)) uses absolute thresholds on the edge magnitudes\ndetect_edges(img, Canny(high = Percentile(80), low = Percentile(20))) uses percentiles of the edge magnitude image as threshold\n\n\n\n\n\n","category":"type"},{"location":"reference/","page":"Function Reference","title":"Function Reference","text":"","category":"page"},{"location":"#ImageEdgeDetection.jl-Documentation","page":"Home","title":"ImageEdgeDetection.jl Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A Julia package containing a number of algorithms for detecting edges in images.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Depth = 3","category":"page"},{"location":"#Getting-started","page":"Home","title":"Getting started","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package is part of a wider Julia-based image processing ecosystem. If you are starting out, then you may benefit from reading about some fundamental conventions that the ecosystem utilizes that are markedly different from how images are typically represented in OpenCV, MATLAB, ImageJ or Python.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The usage examples in the ImageEdgeDetection.jl package assume that you have already installed some key packages. Notably, the examples assume that you are able to load and display an image. Loading an image is facilitated through the FileIO.jl package, which uses QuartzImageIO.jl if you are on MacOS, and ImageMagick.jl otherwise. Depending on your particular system configuration, you might encounter problems installing the image loading packages, in which case you can refer to the troubleshooting guide.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Image display is typically handled by the ImageView.jl package. Alternatives include the various plotting packages, including Makie.jl. There is also the ImageShow.jl package which facilitates displaying images in Jupyter notebooks via IJulia.jl. Finally, one can also obtain a useful preview of an image in the REPL using the ImageInTerminal.jl package. However, this package assumes that the terminal uses a monospace font, and tends not to produce adequate results in a Windows environment.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Another package that is used to illustrate the functionality in ImageEdgeDetection.jl is the TestImages.jl which serves as a repository of many standard image processing test images.","category":"page"},{"location":"#Basic-usage","page":"Home","title":"Basic usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Each edge detection algorithm in ImageEdgeDetection.jl is an AbstractEdgeDetectionAlgorithm.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Suppose one wants to mark the edges in an image. This can be achieved by simply choosing an appropriate algorithm and calling detect_edges or detect_edges! in the image.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Let's see a simple demo using the famous Canny edge detection algorithm:","category":"page"},{"location":"","page":"Home","title":"Home","text":"mkpath(\"images\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"using TestImages, ImageEdgeDetection, MosaicViews\nusing FileIO # hide\nusing ImageCore # hide\nimg =  testimage(\"mandril_gray\")\n# Detect edges at different scales by adjusting the `spatial_scale` parameter.\nimg_edges₁ = detect_edges(img, Canny(spatial_scale = 1.4))\nimg_edges₂ = detect_edges(img, Canny(spatial_scale = 2.8))\nimg_edges₃ = detect_edges(img, Canny(spatial_scale = 5.6))\ndemo₁ = mosaicview(img, img_edges₁, img_edges₂, img_edges₃; nrow = 2)\nsave(\"images/demo1.jpg\", demo₁); # hide","category":"page"},{"location":"","page":"Home","title":"Home","text":"<img src=\"images/demo1.jpg\" width=\"512px\" alt=\"edge detection demo 1 image\" />\n<p>","category":"page"},{"location":"","page":"Home","title":"Home","text":"You can control the Canny hysteresis thresholds by setting appropriate keyword parameters.","category":"page"},{"location":"","page":"Home","title":"Home","text":"# Control the hysteresis thresholds by specifying the low and high threshold values.\nimg =  testimage(\"cameraman\")\nimg_edges₄ = detect_edges(img, Canny(spatial_scale = 1.4, low = Percentile(5), high = Percentile(80)))\nimg_edges₅ = detect_edges(img, Canny(spatial_scale = 1.4, low = Percentile(60), high = Percentile(90)))\nimg_edges₆ = detect_edges(img, Canny(spatial_scale = 1.4, low = Percentile(70), high = Percentile(95)))\ndemo₂ = mosaicview(img, img_edges₄, img_edges₅, img_edges₆; nrow = 2)\nsave(\"images/demo2.jpg\", demo₂); # hide","category":"page"},{"location":"","page":"Home","title":"Home","text":"<img src=\"images/demo2.jpg\" width=\"512px\" alt=\"edge detection demo 2 image\" />\n<p>\n<p>","category":"page"},{"location":"","page":"Home","title":"Home","text":"Each edge thinning algorithm in ImageEdgeDetection.jl is an AbstractEdgeThinningAlgorithm.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Suppose one wants to suppress the typical double edge response of an edge detection filter. This can be achieved by simply choosing an appropriate algorithm and calling thin_edges or thin_edges! on the image gradients and gradient magnitudes.","category":"page"},{"location":"","page":"Home","title":"Home","text":"For example, one can suppress undesirable multi-edge responses associated with the Sobel filter:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using TestImages, ImageEdgeDetection, MosaicViews, ImageFiltering, ImageCore\nusing FileIO # hide\nimg =  Gray.(testimage(\"lake_gray\"))\n# Determine the image gradients\ng₁, g₂ = imgradients(img, KernelFactors.sobel)\n# Determine the gradient magnitude\nmag = hypot.(g₁, g₂)\n# Suppress the non-maximal gradient magnitudes\nnms₁ = thin_edges(mag, g₁, g₂, NonmaximaSuppression())\nnms₂ = thin_edges(mag, g₁, g₂, NonmaximaSuppression(threshold = Percentile(95)))\ndemo₃ = mosaicview(img, Gray.(nms₂), Gray.(mag), Gray.(nms₁); nrow = 2)\nsave(\"images/demo3.jpg\", demo₃); # hide","category":"page"},{"location":"","page":"Home","title":"Home","text":"<img src=\"images/demo3.jpg\" width=\"512px\" alt=\"edge thinning demo image\" />\n<p>","category":"page"},{"location":"","page":"Home","title":"Home","text":"One can also determine the gradient orientation in an adjustable manner by defining an OrientationConvention. An OrientationConvention allows you to specify the compass direction against  which you intend to measure the angle, and whether you are measuring in a clockwise or counter-clockwise manner.","category":"page"},{"location":"","page":"Home","title":"Home","text":"In the example below, we map the angles [0...360] to the unit interval to visualise the orientation of the circle edge test image using different orientation conventions. Note that the angle 360 is used as a sentinel value to demarcate pixels for which the gradient orientation is undefined. The gradient orientation is undefined when the gradient magnitude is effectively zero. This corresponds to regions of constant intensity in the image. In the images that depict the gradient orientation, the undefined orientations are represent as pure white pixels.","category":"page"},{"location":"","page":"Home","title":"Home","text":"using ImageEdgeDetection, MosaicViews, ImageFiltering, ImageCore\nusing FileIO # hide\n\n# Create a test image (black circle against a white background).\na = 250\nb = 250\nr = 150\nimg = Gray.(ones(500, 500))\nfor i in CartesianIndices(img)\n   y, x = i.I\n   img[i] = (x-a)^2 + (y - b)^2 - r^2 < 0 ? 0.0 : 1.0\nend\n\n# Determine the image gradients\ng₁, g₂ = imgradients(img, KernelFactors.sobel)\n\norientation_convention₁ = OrientationConvention(in_radians = false, compass_direction = 'S')\norientation_convention₂ = OrientationConvention(in_radians = false, compass_direction = 'N')\norientation_convention₃ = OrientationConvention(in_radians = false, compass_direction = 'E', is_clockwise = true)\n\nangles₁ = detect_gradient_orientation(g₁, g₂, orientation_convention₁) / 360\nangles₂ = detect_gradient_orientation(g₁, g₂, orientation_convention₂) / 360\nangles₃ = detect_gradient_orientation(g₁, g₂, orientation_convention₃) / 360\n\ndemo₄ = mosaicview(img, Gray.(angles₁), Gray.(angles₂), Gray.(angles₃); nrow = 2)\nsave(\"images/demo4.jpg\", demo₄); # hide","category":"page"},{"location":"","page":"Home","title":"Home","text":"<img src=\"images/demo4.jpg\" width=\"512px\" alt=\"gradient orientation demo image\" />\n<p>","category":"page"},{"location":"","page":"Home","title":"Home","text":"For more advanced usage, please check function reference page.","category":"page"}]
}
