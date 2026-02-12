from PIL import Image, ImageDraw

# Create icons for the PWA
bg_color = (15, 15, 26)  # Dark background
accent_color = (228, 35, 19)  # Metro red (L1)
white = (255, 255, 255)

for size in [192, 512]:
    # Create image
    img = Image.new('RGB', (size, size), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Draw elevator rectangle (red)
    rect_left = size // 4
    rect_top = size // 3
    rect_right = size * 3 // 4
    rect_bottom = size * 2 // 3
    rect_border = max(2, size // 60)
    
    draw.rectangle([rect_left, rect_top, rect_right, rect_bottom], 
                   fill=accent_color, outline=white, width=rect_border)
    
    # Draw vertical line (elevator shaft)
    center_x = size // 2
    line_top = size * 2 // 5
    line_bottom = size * 3 // 5
    line_width = max(3, size // 40)
    
    draw.line([center_x, line_top, center_x, line_bottom], 
              fill=white, width=line_width)
    
    # Draw up arrow
    arrow_size = size // 20
    draw.polygon([
        (center_x - arrow_size, line_top),
        (center_x + arrow_size, line_top),
        (center_x, line_top - arrow_size)
    ], fill=white)
    
    # Draw down arrow
    draw.polygon([
        (center_x - arrow_size, line_bottom),
        (center_x + arrow_size, line_bottom),
        (center_x, line_bottom + arrow_size)
    ], fill=white)
    
    # Save
    img.save(f'icon-{size}.png')
    print(f'Created icon-{size}.png ({size}x{size})')
